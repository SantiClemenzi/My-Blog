import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h1>My Blog</h1>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/about">About me</NavLink>
			</nav>
		</header>
	);
};

export default Header;
