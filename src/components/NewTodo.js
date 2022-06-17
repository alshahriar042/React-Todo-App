import React from 'react'
import style from './newtodo.module.css'

export const NewTodo = () => {

    const handleSubmit =(e) =>{
        e.preventDefault();
    }
    return (

        <form className = {style.form} onSubmit={handleSubmit}>
            <div className={style["form-filed"]}>
                <label htmlFor='title' >Title</label>
                <input type="text" id="title" name="title" />
            </div>

            <div className={style["form-filed"]}>
                <label htmlFor='desc' >Description</label>
                <textarea type="text" id="desc" name="desc" />
            </div>
            <button type='submit'> Add Todo</button>
        </form>


    )
}
