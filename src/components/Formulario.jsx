import React, { useState } from 'react';
import '../style/Formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {
    const [input, setInput] = useState('');


    const manejarCambio = e => {
        setInput(e.target.value);


    }

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);

    }

    return (

        <form className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input type="text"
                className='tarea-input'
                placeholder='Escribir'
                name='texto'
                onChange={manejarCambio} />




            <button class="button-82-pushable">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                    AÑADIR TAREA
                </span>
            </button>

        </form>



    );




}
export default Formulario;