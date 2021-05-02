import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  TAREA_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 3,
        nombre: "Elegir Plataforma de Pagos",
        estado: false,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 5, nombre: "Elegir Backend", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Front", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Elegir Versionado", estado: false, proyectoId: 3 },
      { id: 8, nombre: "Elegir Motor de db", estado: true, proyectoId: 4 },
      {
        id: 9,
        nombre: "Elegir Editor de codigo",
        estado: false,
        proyectoId: 1,
      },
      { id: 10, nombre: "Elegir Libreira", estado: false, proyectoId: 2 },
      { id: 11, nombre: "Elegir SO", estado: true, proyectoId: 3 },
      { id: 12, nombre: "Elegir Scrum Master", estado: false, proyectoId: 4 },
      {
        id: 13,
        nombre: "Elegir Metodologia de trabajo",
        estado: false,
        proyectoId: 1,
      },
    ],
    tareasProyecto: null,
    errortarea: false,
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear las funciones

  //obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREA_PROYECTO,
      payload: proyectoId,
    });
  };

  //agregar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Eliminar tarea id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //valida y muestra un error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
