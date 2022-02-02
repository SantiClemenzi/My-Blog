import React, {useState} from "react";

// creamos contexto = estado global
const ContextoTema = React.createContext();

// componente proovedor del estado
const ProovedorTema = ({children}) => {
    // creamos estado de tema
    const [tema, cambiarTema] = useState({
        alineado: 'center',
        fuente: 17
    });

    return (
        <ContextoTema.Provider value={{tema}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export  {ContextoTema, ProovedorTema};