import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//state inicial del CRUD el proyecto
const ProyectoState = (props) =>{
    //state incial similar a redux,simepre es un objeto
    const initialState = {
        formulario : false//para el boton de crear nuevo proyecto
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el crud de proyectos

    return(
        <proyectoContext.Provider
        value={{ 
            formulario: state.formmulario
         }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;