import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import DynamicTResult from './DynamicTResult';
import DynamicTQuiz from './DynamicTQuiz';

const DynamicTypeForm = () => {
	const [data, setData] = useState([]);
	const [userAnswer, setUserAnswer] = useState([]);
	const [result, setResult] = useState(false);
	const [randomQuiz, setRandomQuiz] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const saveUserAnswerToLocalStorage = (data) => {
		localStorage.setItem('userAnswer', JSON.stringify(data));
	};

	const retrieveUserAnswerFromLocalStorage = () => {
		const storedData = localStorage.getItem('userAnswer');
		return storedData ? JSON.parse(storedData) : [];
	};

	useEffect(() => {
		const storedUserAnswer = retrieveUserAnswerFromLocalStorage();
		setUserAnswer(storedUserAnswer);
	}, []);

	useEffect(() => {
		fetchData();
	}, [userAnswer]);
	useEffect(() => {
		setIsLoading((prev) => !prev);
		if (data.length > 0) {
			setIsLoading((prev) => !prev);
			const randomIndex = Math.floor(Math.random() * data.length);
			setIsLoading((prev) => !prev);
			setRandomQuiz(data[randomIndex]);
			setIsLoading();
		}
	}, [data]);

	const fetchData = () => {
		setIsLoading((prev) => !prev);
		axios
			.get('https://the-trivia-api.com/v2/questions')
			.then((res) => {
				setIsLoading((prev) => !prev);
				setData(res.data);
				setIsLoading();
			})
			.catch((er) => console.log(er));
	};

	const handleAnswers = useCallback(
		(questionId, selectedAnswer, selectedQuestion, correctAnswer) => {
			setIsLoading((prev) => !prev);
			const isDuplicateId = userAnswer.some(
				(answer) => answer.id[0] === questionId
			);
			if (!isDuplicateId) {
				setUserAnswer((prevAnswers) => [
					...prevAnswers,
					{
						id: [questionId],
						answer: selectedAnswer,
						question: selectedQuestion,
						correctAnswer: correctAnswer,
					},
				]);
				saveUserAnswerToLocalStorage(userAnswer);
			}
			setIsLoading();
		},
		[userAnswer]
	);

	const handleShow = () => {
		setIsLoading((prev) => !prev);
		setResult(true);
		setIsLoading();
	};

	const handleRestart = () => {
		setIsLoading((prev) => !prev);
		setUserAnswer([]);
		setResult(false);
		setData(data);
		setRandomQuiz(null);
		localStorage.removeItem('userAnswer');
		setIsLoading();
	};

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const shuffledAnswers = randomQuiz
		? shuffleArray([...randomQuiz.incorrectAnswers, randomQuiz.correctAnswer])
		: [];

	const calculateScore = () => {
		let totalQuestions = userAnswer.length;
		let userScore = 0;

		userAnswer.forEach((question) => {
			if (question.answer === question.correctAnswer) {
				userScore++;
			}
		});

		return { userScore, totalQuestions };
	};

	const { userScore, totalQuestions } = calculateScore();

	const endShowResult = () => {
		setResult(false);
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<Button
				className='fs-1 position-absolute top-0 end-0 mt-5 me-5 px-3 rounded-circle'
				variant='danger'
				onClick={handleRestart}
			>
				☠︎
			</Button>
			{!result ? (
				<DynamicTQuiz
					isLoading={isLoading}
					randomQuiz={randomQuiz}
					shuffledAnswers={shuffledAnswers}
					handleAnswers={handleAnswers}
					handleShow={handleShow}
				/>
			) : (
				<DynamicTResult
					userAnswer={userAnswer}
					isLoading={isLoading}
					userScore={userScore}
					totalQuestions={totalQuestions}
					endShowResult={endShowResult}
				/>
			)}
		</div>
	);
};

export default DynamicTypeForm;
