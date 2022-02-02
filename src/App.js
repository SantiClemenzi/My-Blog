import React, { useContext } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// styled component
import styled from 'styled-components';
// contexto
import { ContextoTema } from './contextos/contextoTema';
// componentes
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Post from './components/Post';
import Error404 from './components/Error404';

const App = () => {
	// accedemos al objeto tema
	const { tema } = useContext(ContextoTema);
	return (
		<BrowserRouter>
			<ContenedorPrincipal>
				<Header />
				<Main tema={tema}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/about" element={<About />} />
						{/* establecemos la ruta por la que se enviara el id */}
						<Route path="/post/:id" element={<Post />} />
						{/* redireccionamiento Error404 */}
						<Route path="*" element={<Error404 />} />
					</Routes>
				</Main>
			</ContenedorPrincipal>
		</BrowserRouter>
	);
};

// styled component
const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

// styled component
const Main = styled.main`
	font-size: ${(props) => (props.tema ? props.tema.fuente + 'px' : '20px')};
	text-align: ${(props) => (props.tema ? props.tema.alineado : 'left')};
	background-color: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
