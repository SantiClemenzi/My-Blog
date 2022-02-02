import React, { useContext } from 'react';
import styled from 'styled-components';
// contexto
import { ContextoTema } from '../contextos/contextoTema';

const Controles = () => {
	const {
		aumentarFuente,
		disminuirFuente,
		textoIzquierda,
		textoCentro,
		textoDerecha,
	} = useContext(ContextoTema);
	return (
		<ContenedorControles>
			<div>
				<Boton onClick={aumentarFuente}>Aumentar Fuente</Boton>
				<Boton onClick={disminuirFuente}>Disminuir Fuente</Boton>
			</div>
			<div>
				<Boton onClick={textoIzquierda}>Izquierda</Boton>
				<Boton onClick={textoCentro}>Centrar</Boton>
				<Boton onClick={textoDerecha}>Derecha</Boton>
			</div>
		</ContenedorControles>
	);
};
const ContenedorControles = styled.div`
	margin-top: 35px;
	margin-bottom: 0px;
	display: flex;
	justify-content: space-between;
`;
const Boton = styled.button`
	background-color: #165168;
	color: #fff;
	border: none;
	cursor: pointer;
	font-size: 12px;
	padding: 7px;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 3px;

	&:hover {
		background-color: #191668;
	}
`;
export default Controles;
