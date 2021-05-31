import React, { useContext, useEffect } from "react";
import Sidebar from "../layouts/Sidebar";
import Barra from "../layouts/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
import AuthContext from "../../context/autenticacion/authContext";

const Proyectos = () => {
  //Extraer informacion de al autenticacion
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />

        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
