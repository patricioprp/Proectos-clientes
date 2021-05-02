import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const {
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
  } = tareasContext;

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //Extraer el nombre del proyecto
  const { nombre } = tarea;

  //si no hay proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto
  const [proyectoActual] = proyecto;

  //leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //pasar la validacion

    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;

    //agregar la nueva tarea al state de tareas
    agregarTarea(tarea);

    //obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //reiniciar al form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
