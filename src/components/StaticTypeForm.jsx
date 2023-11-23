import { useState } from 'react';
import Questions from './Questions';
import DisplayResults from './DisplayResults';
import Button from 'react-bootstrap/Button';

const StaticTypeForm = () => {
	const [userAnswers, setUserAnswers] = useState({});
	console.log(userAnswers);
	const [showResult, setShowResult] = useState(false);
	const [questions, setQuestions] = useState([]);

	const unEscape = (htmlStr) => {
		htmlStr = htmlStr.replace(/&lt;/g, '<');
		htmlStr = htmlStr.replace(/&gt;/g, '>');
		htmlStr = htmlStr.replace(/&quot;/g, '"');
		htmlStr = htmlStr.replace(/&#039;/g, "'");
		htmlStr = htmlStr.replace(/&amp;/g, '&');
		return htmlStr;
	};

	const unEscapeAllStrings = (obj) => {
		if (typeof obj === 'string') {
			return unEscape(obj);
		}

		if (typeof obj === 'object' && obj !== null) {
			for (const key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					obj[key] = unEscapeAllStrings(obj[key]);
				}
			}
		}

		return obj;
	};

	const handleAnswerSelection = (questionId, selectedAnswer) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: selectedAnswer,
		}));
	};
	const calculateScore = () => {
		let totalQuestions = questions.length;
		let userScore = 0;

		questions.forEach((question) => {
			if (userAnswers[question.id] === question.correctAnswer) {
				userScore++;
			}
		});

		return { userScore, totalQuestions };
	};

	const { userScore, totalQuestions } = calculateScore();

	const handleSubmit = () => {
		setShowResult(true);
	};

	const handleRestart = () => {
		setUserAnswers({});
		setShowResult(false);

		setQuestions(questions);
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
			{!showResult ? (
				<div>
					<Questions
						handleAnswerSelection={handleAnswerSelection}
						setQuestions={setQuestions}
						selectedAnswers={userAnswers}
						unEscapeAllStrings={unEscapeAllStrings}
					/>
					<Button
						className='mt-3'
						variant='success'
						onClick={handleSubmit}
					>
						Show Result
					</Button>
				</div>
			) : (
				<div className='d-flex flex-column justify-content-center align-items-center'>
					<p>{`My Score: ${userScore} out of ${totalQuestions}`}</p>
					<DisplayResults
						userAnswers={userAnswers}
						questions={questions}
					/>
				</div>
			)}
		</div>
	);
};
export default StaticTypeForm;
