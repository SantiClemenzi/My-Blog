import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importamos los componentes
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

const App = () => {
	return (
		<BrowserRouter>
			<div>
        <Header/>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
