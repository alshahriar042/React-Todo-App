import React, {useState} from 'react'
import Todos from './Todos'
import style from './home.module.css'
import { NewTodo } from './NewTodo'
import { v4 as uuidv4 } from 'uuid';



const Home = () => {
 
  const[todos,setTodos] =useState([]);

const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return [ ...prevTodos,{id: uuidv4(),todo}]
  });
};
const handleRemoveTodo = (id) => {
  //  setTodos(filterTodos);
  setTodos((prevTodos) => {
     const filterTodos = prevTodos.filter((todo) =>todo.id !== id);

    return filterTodos;
 
});
}


  return (
    <div className={style.container}>
      <NewTodo onAddTodo ={handleTodo} />
        <h1 style={{color :"white"}}>Todo App </h1>
        <Todos todos ={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home