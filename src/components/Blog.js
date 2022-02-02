import React from 'react';
import { NavLink } from 'react-router-dom';
// arreglo con los articulos dentro
import posts from './../data/posts';
// components
import Controles from './Controles';
const Blog = () => {
	return (
		<div>
			<h2>Blog</h2>
			<ul>
				{/* recorremos el arreglo con los articulos */}
				{posts.map((post) => {
					// enviamos el id por el enlace y imprimimos el titulo de cada articulo
					return (
						<li key={post.id}>
							<NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink>
						</li>
					);
				})}
			</ul>
			<Controles/>
		</div>
	);
};

export default Blog;
