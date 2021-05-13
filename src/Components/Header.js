import React from 'react';
import logo from '../Images/logo.svg';

function Header() {
	const showNav = () => {
		const menuBtn = document.querySelector('.menu-btn');
		const navBar = document.querySelector('nav');

		menuBtn.addEventListener('click', () => {
			menuBtn.classList.toggle('rotate');
			navBar.classList.toggle('open');
		});
	};

	return (
		<>
			<header className='header'>
				<div className='logo'>
					<img src={logo} alt='LoopStudios' />
				</div>

				<nav className='open'>
					<div className='nav-logo'>
						<img src={logo} alt='' />
					</div>
					<ul>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Careers</button>
						</li>
						<li>
							<button>Event</button>
						</li>
						<li>
							<button>Product</button>
						</li>
						<li>
							<button>Support</button>
						</li>
					</ul>
				</nav>

				<div className='menu-btn rotate' onClick={showNav}>
					<div className='bar bar-1'></div>
					<div className='bar bar-2'></div>
					<div className='bar bar-3'></div>
				</div>
			</header>
		</>
	);
}

export default Header;
