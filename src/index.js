import React from 'react';
import ReactDOM from 'react-dom';
// estilos
import './index.css';
// componentes
import App from './App';
// contexto
import { ProovedorTema } from './contextos/contextoTema';

ReactDOM.render(
  <React.StrictMode>
    {/*encerramos la app dentro del contexto*/}
    <ProovedorTema>
      <App />
    </ProovedorTema>
  </React.StrictMode>,
  document.getElementById('root')
);

