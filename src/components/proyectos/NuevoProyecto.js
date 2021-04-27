import React, { Fragment,useContext,useState } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {formulario,mostrarFormulario,agregarProyecto,mostrarError,errorformulario} = proyectosContext;

    //state para proyecto
    const[proyecto,guardarProyecto] = useState({
        nombre:''
    });

    //Extraer nombre de proyecto
    const {nombre} = proyecto;

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //validar el proyecto
        if(nombre === ''){
          mostrarError();
          return;
        }

        //Agregar al state 
        agregarProyecto(proyecto);

        //Reiniciar el form
        guardarProyecto({
          nombre:''
        });
    }

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }
    //Mostrar el formulario
    const onClickFormulario = () => {
      mostrarFormulario();
    }

  return (
    <Fragment>

      <button type="button" className="btn btn-block btn-primario" onClick={onClickFormulario}>
        Nuevo Proyecto
      </button>

    {formulario ?
        (
            <form 
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
            >
      
              <input 
              type="text"
              className="input-text"
              placeholder="Nombre Proyecto"
              name="nombre"
              value={nombre}
              onChange={onChangeProyecto}
              />
      
              <input
              type="submit"
              className="btn btn-block btn-primario"
              value="Agregar Proyecto"
              />
            </form>
          )
          : null
    }
          {errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
