import React from "react";

function Todo(props){
    
    return(
        <div style = {{textDecoration: props.todo.completato ? 'Line-through': ''}}>
            {props.todo.name}
            <div>
                <button onClick={() => props.completaTodo(props.index)}>completa</button>
            </div>
            <div>
                <button onClick={() => props.cancTodo(props.index)}>elimina</button>
            </div>
        </div>
    )
}
export default Todo;