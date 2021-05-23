import React, { useState } from 'react';
import './App.css';
import FormToDo from './components/FormToDo';
import Header from './components/Header'
import TodoList from './components/TodoList';

const App = () => {
  const [tareas, setTareas] = useState(
    [
      {
        id: 1,
        text: 'Lavar la ropa',
        complete: false
      },
      {
        id: 2,
        text: 'Grabar turorial',
        complete: false
      }
    ]
  )
  return (
    <div className='contenedor'>
      <Header/>
      <FormToDo tareas={tareas} setTodo={setTareas} />
      <TodoList tareas={tareas}/>
    </div>
  );
}

export default App;
