import React, { useState } from "react";
import TareaFormulario from "./tareaformulario";
function ListadeTareas() {

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        console.log("Tarea Agregada");
        console.log(tarea)
    }

    return(
        <>
            <TareaFormulario/>
            <div className='tareas-lista-contenedor'>
                
            </div>
        </>
    );
}; 
export default ListadeTareas;