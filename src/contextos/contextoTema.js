import React from "react";

// creamos contexto = estado global
const ContextoTema = React.createContext();

// componente proovedor del estado
const ProovedorTema = ({children}) => {
    return (
        <ContextoTema.Provider value={{nombre:'juan'}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export  {ContextoTema, ProovedorTema};