import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import DynamicTResult from './DynamicTResult';

const DynamicTypeForm = () => {
	const [data, setData] = useState([]);
	const [userAnswer, setUserAnswer] = useState([]);
	const [result, setResult] = useState(false);
	const [randomQuiz, setRandomQuiz] = useState(null);
	// const [clickedButton, setClickedButton] = useState({});

	console.log(userAnswer);
	useEffect(() => {
		fetchData();
	}, [userAnswer]);
	useEffect(() => {
		if (data.length > 0) {
			const randomIndex = Math.floor(Math.random() * data.length);
			setRandomQuiz(data[randomIndex]);
		}
	}, [data]);

	const fetchData = () => {
		axios
			.get('https://the-trivia-api.com/v2/questions')
			.then((res) => {
				setData(res.data);
			})
			.catch((er) => console.log(er));
	};

	const handleAnswers = useCallback(
		(questionId, selectedAnswer, selectedQuestion, correctAnswer) => {
			setUserAnswer((prevAnswers) => [
				...prevAnswers,
				{
					id: [questionId],
					answer: selectedAnswer,
					question: selectedQuestion,
					correctAnswer: correctAnswer,
				},
			]);
		},
		[]
	);

	const handleShow = () => {
		setResult(true);
	};

	const handleRestart = () => {
		setUserAnswer([]);
		setResult(false);
		setData(data);
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<Button
				className='position-absolute top-0 end-0 mt-5 me-5 '
				variant='info'
				onClick={handleRestart}
			>
				Reset
			</Button>
			{!result ? (
				<div>
					{randomQuiz && (
						<div>
							<h3
								className='my-5'
								key={randomQuiz.id}
							>
								{randomQuiz.question.text}
							</h3>

							<ul>
								{randomQuiz &&
									[
										...randomQuiz.incorrectAnswers,
										randomQuiz.correctAnswer,
									].map((answer) => (
										<li
											style={{ listStyle: 'none', display: 'inline' }}
											key={answer}
										>
											<Button
												variant='secondary'
												type='radio'
												name={randomQuiz.id}
												value={answer}
												className='mx-2 my-3'
												onClick={() =>
													handleAnswers(
														randomQuiz.id,
														answer,
														randomQuiz.question.text,
														randomQuiz.correctAnswer
													)
												}
											>
												{answer}
											</Button>
										</li>
									))}
							</ul>
							<Button
								className='mt-3'
								variant='success'
								onClick={handleShow}
							>
								Final Result
							</Button>
						</div>
					)}
				</div>
			) : (
				<DynamicTResult userAnswer={userAnswer} />
			)}
		</div>
	);
};

export default DynamicTypeForm;
