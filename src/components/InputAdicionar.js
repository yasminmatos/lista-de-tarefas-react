import React from 'react'

function InputAdicionar() {
    function onClick(){
        
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Adicionar uma tarefa" />
                <button onClick={onClick}> + </button>
            </form>
        </div>
    )
}

export default InputAdicionar