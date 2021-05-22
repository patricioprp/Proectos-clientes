import React, {useReducer} from 'react';

import AlertaContext from '../../context/alertas/alertaContext';
import AlertaReducer from '../../context/alertas/alertaReducer';

import {MOSTRAR_ALERTA,OCULTAR_ALERTA} from '../../types';

const AlertaState = (props) => {

    const initialState = {
        alerta: null
    };

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(AlertaReducer, initialState);

    //Funciones
    const mostrarAlerta = (msg,categoria) =>{
        dispatch({
            type: MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        });

        //Despues de 5 segundos limpiar el error
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 5000);
    }
    return (
        <AlertaContext.Provider
        value={{ 
            alerta: state.alerta,
            mostrarAlerta
         }}
        >
            {props.children}
        </AlertaContext.Provider>
    );
}

export default AlertaState;