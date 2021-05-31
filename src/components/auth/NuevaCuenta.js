import React, {useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const NuevaCuenta = (props) => {
    //Extraer los valores del Context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    //en el caso de que el usuario se haya autenticado, registrado o sea un usuario duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [mensaje,autenticado,props.history])


    //State para iniciar sesion

    const[usuario,guardarUsuario]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    //Extraer de usuario
    const { nombre,email,password,confirmar } = usuario;

    const onChange = (e) =>{

        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        });
    }
    //Cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if(
            nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '' 
            ){
                mostrarAlerta('Todos los campos son obligatorios','alerta-error');
                return;
        }

        //Validar password minimo de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('El password debe tener como minimo 6 caracteres','alerta-error');
            return;
        }
        //Los dos password sean iguales
        if(password !== confirmar){
            mostrarAlerta('Los password no coinciden','alerta-error');
            return;
        }
        //Pasarlos al action
         registrarUsuario({
             nombre,
             email,
             password
         });
    }

    return (
        <div className="form-usuario">
            { alerta? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>

                <form
                onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Confirma Tu Password"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;