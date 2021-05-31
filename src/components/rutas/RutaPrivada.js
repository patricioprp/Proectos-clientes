import React, {useEffect,useContext, Component} from 'react';
import {Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

//creando el HOC
//lo que hacemos aqui es proteger los componentes, redirigiendo al login en el caso de que no esta autenticado
const RutaPrivada = ({component:Component, ...props}) => {

    const authContext =  useContext(AuthContext);
    const {autenticado,usuarioAutenticado,cargando} = authContext;

    useEffect(() => {
        //esto es para que cuando se recargue la pagina no pierda la autenticacion true
        usuarioAutenticado();
        //eslint-disable-next-line
    }, [])

    return ( //el render es como un return implicito
        <Route {...props} render={props => !autenticado && !cargando ? (
            <Redirect to="/" />
        ):(
            <Component {...props} />
        ) } />
     ); 
}
 
export default RutaPrivada;
//luego en el App.js reemplazamos el tag Route por RutaPrivada
//esto sirve para cualquier proyecto 
//el cargando es para que no se vea el pantallazo del login al recargar