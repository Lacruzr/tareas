import React, { useState } from "react";
import '../hoja-de-estilo/tareaformulario.css';

function TareaFormulario(props){
  
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        console.log("escribiendo...")

    }



    const manejarEnvio = e => {
        const tareaNueva = {
            id: '3456',
            texto:'Hola'
        }
    }
  
    return(
        <form className='tarea-formulario'>
            <input
            className='tarea-input'
            type='text'
            placeholder='escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );

};
export default TareaFormulario;