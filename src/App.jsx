import React, { useState,useEffect } from 'react'
import Header from './components/Header/Header'
import Task from './components/tasks/Task'

const LOCAL_STORAGE_KEY="todo:savedtasks"

const App = () => {
  const [todo,setTodo]=useState([]);
  function addtask(tasktitle){
    saveTask([
      ...todo,
      {
      id:crypto.randomUUID(),
      title:tasktitle,
      completed:false
    }])
  }

function localsaveddata(){
  const saved=localStorage.getItem(LOCAL_STORAGE_KEY);
  if(saved)
  {
  setTodo(JSON.parse(saved))
  }
}

useEffect(() => {
  localsaveddata()
}, [])


function toggletask(taskid){
  const newtask=todo.map(todo=>{
    if(todo.id===taskid)
    {
      return{
        ...todo,
        completed: !todo.completed
      }
    }
    return todo
    
  })
  saveTask(newtask)
}
function deleteTodo(taskid)
{
  const newtask=todo.filter(todo=> todo.id!==taskid)
  saveTask(newtask);
}


function saveTask(newtask)
{
  setTodo(newtask)
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newtask))
}

  return (
    <div className="container"> 
    <Header Onaddtask={addtask}/>
    <Task 
    todo={todo}
    onComplete={toggletask} 
    onDelete={deleteTodo}/>
    </div>
  )
}

export default App