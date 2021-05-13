import React from 'react';
import data from '../desktop-images';
function CreationDesktop() {
	const [cards, setCards] = React.useState(data);
	return (
		<section className='creation-desktop'>
			<div className='title'>
				<h2>Our Creations</h2>
				<div className='btn-container'>
					<button className='btn'>See all</button>
				</div>
			</div>

			<section>
				{cards.map((card) => {
					const { id, image, title } = card;
					return (
						<article key={id}>
							<div>
								<img src={image} alt='Creation Card' />
							</div>
							<h3>{title}</h3>
						</article>
					);
				})}
			</section>
		</section>
	);
}

export default CreationDesktop;
