import React from 'react'
import style from './tasks.module.css'
import {TbTrash} from 'react-icons/Tb'
import {BsFillCheckCircleFill} from 'react-icons/Bs'
const Tasks = ({todo, onComplete, onDelete}) => {
  
  return (
    <div className={style.task}>
        <button onClick={()=>onComplete(todo.id)}  className={style.checkContainer}>
            {todo.completed ? <BsFillCheckCircleFill /> :<div />}
        </button>
        <p className={todo.completed?style.textCompleted:""}>{todo.title}</p>
        <button onClick={()=>onDelete(todo.id)}
         className={style.deleteButton}>
          <TbTrash size={20}/>
        </button>
    </div>
  )
}

export default Tasks