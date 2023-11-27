const DisplayResults = ({ userAnswers, questions }) => {
	return (
		<div className='mb-5 pb-5'>
			<h2>Review Answers</h2>

			{questions.map((question) => (
				<div key={question.id}>
					<h3>{question.question}</h3>
					{userAnswers[question.id] === question.correctAnswer ? (
						<p>✅</p>
					) : (
						<p>❌</p>
					)}
					<p>My Answer: {userAnswers[question.id]}</p>
					<p>Correct Answer: {question.correctAnswer}</p>
				</div>
			))}
		</div>
	);
};

export default DisplayResults;
