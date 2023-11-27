import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const DynamicTQuiz = ({
	isLoading,
	randomQuiz,
	shuffledAnswers,
	handleAnswers,
	handleShow,
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
									shuffledAnswers.map((answer) => (
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
								See Result
							</Button>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default DynamicTQuiz;
