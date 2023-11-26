const DynamicTResult = ({ userAnswer }) => {
	return (
		<div>
			<h2>Review Answers</h2>

			{userAnswer.map((q) => (
				<div key={q.id}>
					<h3>{q.question}</h3>
					{q.answer === q.correctAnswer ? <p>✅</p> : <p>❌</p>}
					<p>My Answer: {q.answer}</p>
					<p>Correct Answer: {q.correctAnswer}</p>
				</div>
			))}
		</div>
	);
};

export default DynamicTResult;
