/* eslint no-use-before-define: 0 */

import React from 'react';
import data from '../mobile_images';
function Creation() {
	const [cards, setCards] = React.useState(data);
	return (
		<section className='creation-mobile'>
			<h2>Our Creations</h2>
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
			<div className='btn-container'>
				<button className='btn'>See all</button>
			</div>
		</section>
	);
}

export default Creation;
