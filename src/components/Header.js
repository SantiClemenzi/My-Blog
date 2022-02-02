import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	return (
		<ContenedorHeader>
			<Titulo>My Blog</Titulo>
			<Menu>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/about">About me</NavLink>
			</Menu>
		</ContenedorHeader>
	);
};
// styled component
const ContenedorHeader = styled.header`
	text-align: center;
	margin-bottom: 40px;
`;
// styled component
const Titulo = styled.h1`
	margin-bottom: 10px;
	font-size: 26px;
	text-transform: uppercase;
`;
// styled component
const Menu = styled.nav`
	a {
		text-decoration: none;
		color: #165168;
		margin: 0px 10px;
	}
	a:hover {
		color: #000;
	}
	a.active {
		border-bottom: 2px solid #165168;
	}
`;

export default Header;
