import React from 'react'
import Todos from './Todos'
import style from './home.module.css'
import { NewTodo } from './NewTodo'


const dummyTodos =[
    {
        id:1,
        title : "todo title 1",
        desc : "todo description is here..."
    },
    {
        id:2,
        title : "todo title 2",
        desc : "todo2 description is here..."
    }
]

const Home = () => {
  return (
    <div className={style.container}>
      <NewTodo />
        <h1 style={{color :"white"}}>Todo App </h1>
        <Todos todos ={dummyTodos} />
    </div>
  )
}

export default Home