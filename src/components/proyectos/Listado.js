import React from 'react';
import Proyecto from './Proyecto';

const Listado = () => {

    const proectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'intranet'},
        {nombre: 'Diseño de sitio Web'}
    ];
    return ( 
        <ul className="listado-proyectos">
            {proectos.map(proyecto => (
                <Proyecto
                key={proyecto.nombre}
                proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default Listado;