import Spinner from 'react-bootstrap/Spinner';
const DynamicTResult = ({
	userAnswer,
	isLoading,
	userScore,
	totalQuestions,
}) => {
	return (
		<div>
			{isLoading ? (
				<Spinner
					animation='border'
					variant='primary'
				/>
			) : (
				<div>
					<h2 className='my-3 p-2'>Review Answers</h2>
					<p className='my-3 text-success-emphasis'>{`Scored: ${userScore} out of ${totalQuestions}`}</p>
					{userAnswer.map((q) => (
						<div
							className='mb-5 p-2'
							key={q.id}
						>
							<h3>{q.question}</h3>
							{q.answer === q.correctAnswer ? (
								<div className='d-flex justify-content-center'>
									<p className='px-2'>My Answer: </p>
									<p className='text-success'> {q.answer}</p>
								</div>
							) : (
								<div className='d-flex justify-content-center'>
									<p className='px-2'>My Answer: </p>
									<p className='text-danger'> {q.answer}</p>
								</div>
							)}
							<p>Correct Answer: {q.correctAnswer}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DynamicTResult;
