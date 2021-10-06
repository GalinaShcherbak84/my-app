import React from "react";
function Todo(props){
    
    return(
        <div className="todo" >
            <h3 style = {{textDecoration: props.todo.completato ? 'Line-through': ''}}> {props.todo.name}</h3>
           
            <div className="buttons">
                <button onClick={() => props.completaTodo(props.index)}>{props.todo.completato ? 'ripristina' : 'completa'}</button>
                <button className="canc" onClick={() => props.cancTodo(props.index)}>elimina</button>
            </div>

        </div>
    )
}
export default Todo;