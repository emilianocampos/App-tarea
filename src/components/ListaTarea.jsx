import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import '../style/Lista.css'

function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);


    }


    const addTarea = tarea => {

        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];

            setTareas(tareasActualizadas);


        }

    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);

    }
    return (

        <>
            <Formulario onSubmit={addTarea} />
            <div className='tarea-lista-contenedor'>

                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea} 
                            />

                    )

                }

            </div>

        </>



    );

}
export default ListaTareas;