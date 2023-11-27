const Footer = () => {
	const renderBubbles = () => {
		const bubbles = [];
		for (let i = 0; i < 128; i++) {
			const bubbleStyle = {
				'--size': `${2 + Math.random() * 4}rem`,
				'--distance': `${6 + Math.random() * 4}rem`,
				'--position': `${-5 + Math.random() * 110}%`,
				'--time': `${2 + Math.random() * 2}s`,
				'--delay': `${-1 * (2 + Math.random() * 2)}s`,
			};
			bubbles.push(
				<div
					key={i}
					className='bubble'
					style={bubbleStyle}
				></div>
			);
		}
		return bubbles;
	};

	return (
		<div>
			<div className='footer'>
				<div className='bubbles'>{renderBubbles()}</div>
				<div className='content'>
					<div>
						<div>
							<b>Created by</b>
							<a
								className='px-2'
								href='#'
							>
								Aadil
							</a>
							<a
								className='px-2'
								href='#'
							>
								Naeem
							</a>
							<a
								className='px-2'
								href='#'
							>
								Sabina
							</a>
						</div>
						{/* ... Other similar div blocks */}
					</div>
					<div>
						<a
							className='image'
							href='https://codepen.io/z-'
							target='_blank'
							style={{
								backgroundImage:
									'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
							}}
						></a>
						<p>©2023 Just Kidding</p>
					</div>
				</div>
			</div>
			<svg style={{ position: 'fixed', bottom: '100vh' }}>
				<defs>
					<filter id='blob'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='10'
							result='blur'
						/>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
							result='blob'
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Footer;
