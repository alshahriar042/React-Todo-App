import React, {useState} from 'react'
import Todos from './Todos'
import style from './home.module.css'
import { NewTodo } from './NewTodo'
import { v4 as uuidv4 } from 'uuid';



const Home = () => {
 
  const[todos,setTodo] =useState([]);

const handleTodo = (todo) => {
    setTodo((prevTodos) => {
      return [...prevTodos,{id: uuidv4(),todo}]
  });
  console.log(todo);
};

  return (
    <div className={style.container}>
      <NewTodo onAddTodo ={handleTodo} />
        <h1 style={{color :"white"}}>Todo App </h1>
        <Todos todos ={todos} />
    </div>
  )
}

export default Home