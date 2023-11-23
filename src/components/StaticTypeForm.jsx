import { useState } from 'react';
import Questions from './Questions';
import DisplayResults from './DisplayResults';

const StaticTypeForm = () => {
	const [userAnswers, setUserAnswers] = useState({});
	console.log(userAnswers);
	const [showResult, setShowResult] = useState(false);
	const [questions, setQuestions] = useState([]);

	const handleAnswerSelection = (questionId, selectedAnswer) => {
		setUserAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: selectedAnswer,
		}));
	};

	const calculateScore = () => {
		let score = 0;
		questions.forEach((question) => {
			if (userAnswers[question.id] === question.correctAnswer) {
				score++;
			}
		});
		return score;
	};
	const userScore = calculateScore();

	const handleSubmit = () => {
		setShowResult(true);
	};

	const handleRestart = () => {
		setUserAnswers({});
		setShowResult(false);

		setQuestions(questions);
	};

	return (
		<div>
			<p>My Score: {userScore}</p>
			<Questions
				handleAnswerSelection={handleAnswerSelection}
				setQuestions={setQuestions}
			/>
			<button onClick={handleSubmit}>Show Result</button>
			<button onClick={handleRestart}>Reset</button>
			{showResult && (
				<DisplayResults
					userAnswers={userAnswers}
					questions={questions}
				/>
			)}
		</div>
	);
};
export default StaticTypeForm;
