import React, { useState } from 'react'
import style from './header.module.css'
import { CiCirclePlus } from "react-icons/ci";
const Header = ({Onaddtask}) => {
   const [task,setTask]=useState("")
  const handlesubmit=(event)=>{
    event.preventDefault();
    Onaddtask(task)
    setTask('')
  }
  const handletitle=(event)=>{
    setTask(event.target.value);
  }
  return (
    <div>
        <header className={style.header}>
           <h1>Todo App</h1>

           <form onSubmit={handlesubmit} className={style.newtask}>
            <input type='text' placeholder="create a todos" value={task} onChange={handletitle}/>
            <button>create 
              <i><CiCirclePlus size={20}/></i>
              
            </button>
           </form>
        </header>
    </div>
  )
}

export default Header