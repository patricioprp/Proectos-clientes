import React, {useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //extraer proyectos en el state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos,obtenerProyectos } = proyectosContext;

        //Cargando los proyectos
        useEffect(() => {
            obtenerProyectos();
        }, []);

    //Reviar si proyectos tiene contenido
    if( proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p> ;

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                key={proyecto.id}
                proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;