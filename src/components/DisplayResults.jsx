import React from 'react';

const DisplayResults = ({ userAnswers, questions }) => {
	return (
		<div>
			<h2>Review Answers</h2>

			{questions.map((question) => (
				<div key={question.id}>
					<h3>{question.question}</h3>
					<p>User's Answer: {userAnswers[question.id]}</p>
					<p>Correct Answer: {question.correctAnswer}</p>
					{userAnswers[question.id] === question.correctAnswer ? (
						<p>✅ Correct</p>
					) : (
						<p>❌ Incorrect</p>
					)}
				</div>
			))}
		</div>
	);
};

export default DisplayResults;
