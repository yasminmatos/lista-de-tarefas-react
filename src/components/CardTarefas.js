import React from 'react';
import "./CardTarefas.css"

function CardTarefas() {

    function onClick() {
        


    }
    return (
        <div>
            <div>                 
                <p> Titulo </p>
            </div>
            <div className="cardTarefas">
                <p> Tarefa </p>

                <button> Apagar </button>
                <button onClick={onClick}> Concluir </button>
            </div>
        </div>
    )
}

export default CardTarefas