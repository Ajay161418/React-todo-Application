import React from 'react'
import style from './task.module.css'
import Tasks from '../task/Tasks'
const Task = ({todo , onComplete, onDelete}) => {
    const completedtask=todo.filter(todo=>todo.completed).length
  return (
    <div >
        <section className={style.task}>
            <header className={style.header}>
                <div className={style.tasklist}>
                    <p>create tasks</p>
                    <span>{todo.length}</span>
                </div>
                <div className={style.tasklist}>
                    <p className={style.textpurple}> Completed </p>
                    <span>{completedtask} of {todo.length}</span>
                </div>
            </header>
            <div className={style.list}>
                {todo.map(todo=>(
                    <Tasks key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete}/>
                ))}
                
            </div>
        </section>
    </div>
  )
}

export default Task