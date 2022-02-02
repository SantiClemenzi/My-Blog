import React, { useState } from 'react';

// creamos contexto = estado global
const ContextoTema = React.createContext();

// componente proovedor del estado
const ProovedorTema = ({ children }) => {
	// creamos estado de tema
	const [tema, cambiarTema] = useState({
		alineado: 'left',
		fuente: 17,
	});

	// creamos funciones
	const aumentarFuente = () => {
		cambiarTema({ ...tema, fuente: tema.fuente + 1 });
	};
	const disminuirFuente = () => {
		cambiarTema({ ...tema, fuente: tema.fuente - 1 });
	};

	const textoIzquierda = () => {
		cambiarTema({ ...tema, alineado: 'left' });
	};
	const textoCentro = () => {
		cambiarTema({ ...tema, alineado: 'center' });
	};
	const textoDerecha = () => {
		cambiarTema({ ...tema, alineado: 'right' });
	};

	return (
		<ContextoTema.Provider
			value={{
				tema,
				aumentarFuente,
				disminuirFuente,
				textoIzquierda,
				textoCentro,
				textoDerecha,
			}}
		>
			{children}
		</ContextoTema.Provider>
	);
};

export { ContextoTema, ProovedorTema };
