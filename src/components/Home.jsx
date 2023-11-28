const Home = () => {
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					lineHeight: '4rem',
					fontSize: '4rem',
					letterSpacing: '0.5rem',
					color: 'orange',
				}}
			>
				Get ready!
			</h1>
			<h1
				style={{
					margin: '2rem',
					textAlign: 'center',
					lineHeight: '4rem',
					fontSize: '3rem',
					letterSpacing: '0.4rem',
					overflow: 'contain',
				}}
			>
				to conquer the ultimate trivia challenge
			</h1>
			<div className='h-content-para'>
				<h2 style={{ letterSpacing: '0.5rem', padding: '2rem' }}>
					Trivia Fest
				</h2>
				<p
					style={{
						fontSize: '1rem',
						textAlign: 'center',
						letterSpacing: '0.2rem',
					}}
				>
					answer randomized <strong>Questions</strong> <br /> and test your
					knowledge
				</p>
				<div className='h-content-list'>
					<div className='h-content-item'>Music</div>
					<div className='h-content-item'>Science</div>
					<div className='h-content-item'>Art</div>
					<div className='h-content-item'>Culture</div>
					<div className='h-content-item'>Religion</div>
					<div className='h-content-item'>Nature</div>
					<div className='h-content-item'>Lifestyle</div>
					<div className='h-content-item'>Geopolitics</div>
					<div className='h-content-item'>IT</div>
					<div className='h-content-item'>History</div>
					<div className='h-content-item'>and many more...</div>
				</div>
			</div>
		</>
	);
};

export default Home;
