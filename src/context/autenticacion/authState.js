import React, { useReducer } from "react";
import AuthReducer from "../../context/autenticacion/authReducer";
import AuthContext from "../../context/autenticacion/authContext";

import clienteAxios from '../../config/axios';

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const initialState = {
    token: localStorage.getItem('token'),//cuando nos logueamos guardamos el token en local storage y aqui accedemos a ese dato y lo almacenamos en el state
    autenticado: null,
    usuario: null,
    mensaje: null
}

const AuthState = (props) => {

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async datos => {
      try {

        const respuesta = await clienteAxios.post('/api/usuarios', datos);

        dispatch({
            type: REGISTRO_EXITOSO,
            payload: respuesta.data
        });
        
      } catch (error) {
          // console.log(error.response.data.msg)
          const alerta = {
            msg: error.response.data.msg,
            categoria: 'alerta-error'
          }
          dispatch({
              type: REGISTRO_ERROR,
              payload: alerta
          });
      }
  };

  return(
      <AuthContext.Provider
      value={{ 
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario
       }}
      >
          {props.children}
      </AuthContext.Provider>
  );
};

export default AuthState;