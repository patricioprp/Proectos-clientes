import {
  TAREA_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREA_PROYECTO:
      return {
        ...state,
        tareasProyecto: action.payload
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareasProyecto: [action.payload, ...state.tareasProyecto],
        errortarea: false,
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareasProyecto: state.tareasProyecto.filter((tarea) => tarea._id !== action.payload),
      };
    case ACTUALIZAR_TAREA:// los dos state ejecutan el mismo codigo
      return {
        ...state,
        tareasProyecto: state.tareasProyecto.map(tarea =>
          tarea._id === action.payload._id ? action.payload : tarea
        ),
      };
    
    case TAREA_ACTUAL:
      return{
        ...state,
        tareaseleccionada: action.payload
      }
    case LIMPIAR_TAREA:
      return{
        ...state,
        tareaseleccionada: null
      }
    default:
      return state;
  }
};
