import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';


const App =()=>{
  const [todos, setTodos] = useState(
    [
      {
        name: 'Fare la spesa',
        completato:false
      },
      {
        name: 'Chiamare il cliente',
        completato:false
      },
      {
        name: 'Lavare la maccina',
        completato:false
      },
    ]
  );
  const addTodo = (todo) => {
    const newTodos=[...todos, {name:todo}];
    setTodos(newTodos);
  }
  const completaTodo = (index) =>{
    const newTodos=[...todos];
    newTodos[index].completato = !newTodos[index].completato;
    setTodos(newTodos);
  }
  const cancTodo = (index) =>{
    const newTodos=[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  return(
    <div className="app">
        <div className="todo-list">
          {todos.map((item, index)=>(
            <Todo key={index} todo={item} index={index} completaTodo={completaTodo} cancTodo = {cancTodo}/>
          ))}
          <Form submit={addTodo}/>
        </div>
    </div>
  )
  
}
export default App;