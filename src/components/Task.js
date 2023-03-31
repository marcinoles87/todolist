import React, { useState } from 'react'


import './task.css'

import List from './List';



export default function Task(props) {

  let [task, setTask] = useState('');
  let [todos , setTodos] = useState([]);
  let [id , setId] = useState();


 const handleOnChange = (e) => {
    setTask(
      task = e.target.value
    )
 }

  const submitTodos = (e) => {
    e.preventDefault()

    setId(
      id = Math.floor(Math.random()*100)
    )

    console.log(id)


    setTodos([...todos , { 
      text : task , 
      id: id
    }])

    setTask(
      task = ''
    )

    
    
  }


  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange}></input><button onClick={submitTodos}>Add Task</button>
        
        <ul >
          {todos.map( (todo) => {
            return <List key={todo.id} id={todo.id} task={todo.text}  ></List>
          })}
          
        </ul>
        
      
      
        
    </div>
  )
}
