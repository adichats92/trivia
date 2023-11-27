import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
const DynamicTResult = ({
	userAnswer,
	isLoading,
	userScore,
	totalQuestions,
	endShowResult,
}) => {
	return (
		<div>
			{isLoading ? (
				<Spinner
					animation='border'
					variant='primary'
				/>
			) : (
				<div className='mb-5 pb-5'>
					<Button
						className='fs-1 position-absolute top-0 start-0 mt-5 ms-5 px-3 rounded-circle'
						variant='info'
						onClick={endShowResult}
					>
						🔙
					</Button>
					<h2 className='my-3 p-3 border-bottom border-danger'>
						Review Answers
					</h2>
					<p className='my-3 text-success-emphasis'>{`Scored: ${userScore} out of ${totalQuestions}`}</p>
					{userAnswer.map((q) => (
						<div
							className='mb-5 p-5 border border-info-subtle bg-info bg-opacity-10 rounded-end'
							key={q.id}
						>
							<h3>{q.question}</h3>
							{q.answer === q.correctAnswer ? (
								<div className='d-flex justify-content-center'>
									<h5 className='px-2'>My Answer: </h5>
									<h5 className='text-success'> {q.answer}</h5>
								</div>
							) : (
								<div className='d-flex justify-content-center'>
									<h5 className='px-2'>My Answer: </h5>
									<h5 className='text-danger'> {q.answer}</h5>
								</div>
							)}
							<div className='d-flex justify-content-center'>
								<h5 className='px-2'>Correct Answer:</h5>
								<h5 className='text-success-emphasis'>{q.correctAnswer}</h5>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DynamicTResult;
