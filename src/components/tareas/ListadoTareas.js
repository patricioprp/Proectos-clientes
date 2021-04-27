import React, { Fragment,useContext } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext'
import Tarea from './Tarea';

const ListadoTareas = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyecto,eliminarProyecto} = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Arrau destructuring para extraer el proyecto
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: "Elegir Plataforma" , estado: true },
        { nombre: "Elegir Colores" , estado: false },
        { nombre: "Elegir Plataforma de Pagos" , estado: false },
        { nombre: "Elegir Hosting" , estado: true }
    ];

    //Elimina un proyecto
     const onClickEliminar = () => {

       eliminarProyecto(proyectoActual.id)
       
      }

  return (
    <Fragment>
             <h2>Proyecto: {proyectoActual.nombre} </h2> 

      <ul className="listado-Proyectos">
          {tareasProyecto.length ===0
          ?(<li className="tarea"><p>No hay tareas</p></li>)
          :tareasProyecto.map(tarea => (
            <Tarea
            key={tarea.nombre}
            tarea={tarea}
            />
        ))
          }
      </ul>
      <button
      type="button"
      className="btn btn-eliminar"
      onClick={onClickEliminar}
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
};

export default ListadoTareas;
