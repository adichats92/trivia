import { useState } from 'react';
import Questions from './Questions';
import DisplayResults from './DisplayResults';
import Button from 'react-bootstrap/Button';

const StaticTypeForm = () => {
	const [userAnswers, setUserAnswers] = useState({});
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
		<div className='d-flex flex-column justify-content-center align-items-center mb-5 pb-5'>
			<Button
				className='fs-2 position-absolute top-0 end-0 mt-5 me-5 px-3 py-2 rounded-circle'
				variant='danger'
				onClick={handleRestart}
			>
				☠︎
			</Button>
			{!showResult ? (
				<div>
					<Questions
						handleAnswerSelection={handleAnswerSelection}
						setQuestions={setQuestions}
						selectedAnswers={userAnswers}
						unEscapeAllStrings={unEscapeAllStrings}
						questions={questions}
					/>
					<Button
						className='mt-3 mb-5'
						style={{
							background: 'rgba(0, 59, 72, 0.977)',
							borderColor: 'orange',
						}}
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
