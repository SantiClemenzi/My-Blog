import React from "react";
import styled from "styled-components";

const Controles = () => {
    return ( 
        <ContenedorControles>
            <div>
                <Boton>Aumentar Fuente</Boton>
                <Boton>Disminuir Fuente</Boton>
            </div>
            <div>
                <Boton>Izquierda</Boton>
                <Boton>Centrar</Boton>
                <Boton>Derecha</Boton>
            </div>
        </ContenedorControles>
     );
}
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

    &:hover{
        background-color: #191668;
    }
 `;
export default Controles;