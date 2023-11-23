import { useEffect, useState } from 'react';

const Questions = ({ handleAnswerSelection, setQuestions }) => {
	const [questions, setQuestionsState] = useState([]);
	useEffect(() => {
		const fetchedQuestions = [
			{
				id: '26c4806d-fe05-4344-84ca-3c0092d15477',
				question: 'What does CPU stand for?',
				correctAnswer: 'Central Processing Unit',
				answers: [
					'Central Processing Unit',
					'Computer Personal Unit',
					'Central Process Unit',
					'Central Processor Unit',
				],
			},
			{
				id: 'cd647d49-62e0-4ff9-8b4d-71e0b4099767',
				question:
					'The following Spanish provinces are located in the northern area of Spain except:',
				correctAnswer: 'Murcia',
				answers: ['Le&oacute;n', 'Asturias', 'Navarre', 'Murcia'],
			},
			{
				id: 'd52c4a1c-8c33-4308-831b-916fa989ef21',
				question:
					'What is the name of the first &quot;Star Wars&quot; film by release order?',
				correctAnswer: 'A New Hope',
				answers: [
					'The Force Awakens',
					'The Phantom Menace',
					'A New Hope',
					'Revenge of the Sith',
				],
			},
			{
				id: '258d5be5-7e3b-44cc-bbb1-fb6c1a03bbda',
				question:
					'The metric prefix &quot;atto-&quot; makes a measurement how much smaller than the base unit?',
				correctAnswer: 'One Quintillionth',
				answers: [
					'One Septillionth',
					'One Quintillionth',
					'One Billionth',
					'One Quadrillionth',
				],
			},
			{
				id: '179e8915-189d-4643-8a52-5801a5a1fc84',
				question: 'Pamina and Papageno are characters in what Mozart opera?',
				correctAnswer: 'The Magic Flute',
				answers: [
					'The Magic Flute',
					'The Marriage of Figaro',
					'The Goose of Cairo',
					'The Impresario',
				],
			},
			{
				id: '4e7f9530-93d4-4d73-9ee5-75d9267b2a7d',
				question:
					'Which of the following awards do Matt Stone and Trey Parker NOT have?',
				correctAnswer: 'Oscar',
				answers: ['Tony', 'Oscar', 'Grammy', 'Emmy'],
			},
		];

		setQuestionsState(fetchedQuestions);
		setQuestions(fetchedQuestions);
	}, [setQuestions]);

	return (
		<div>
			{questions.map((question) => (
				<div key={question.id}>
					<h3>{question.question}</h3>
					<ul>
						{question.answers &&
							question.answers.map((answer) => (
								<li
									style={{ listStyle: 'none', display: 'inline' }}
									key={answer}
								>
									<button
										type='radio'
										name={question.id}
										value={answer}
										onClick={() => handleAnswerSelection(question.id, answer)}
									>
										{answer}
									</button>
								</li>
							))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Questions;
