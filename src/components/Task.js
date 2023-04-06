import React, { useState } from 'react'


import './task.css'

import List from './List';



export default function Task(props) {

  let [task, setTask] = useState('');
  let [todos , setTodos] = useState([]);
  let [done , setDone] = useState([]);
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


    setTodos([...todos , { 
      text : task , 
      id: id , 
      date : Date().slice(7),
      
    }])

    setTask(
      task = ''
    )

    

  }

console.log(done)
  return (
    <div  className='Task'>
        <h2>Add Task</h2>
        <input onChange={handleOnChange} value={task}></input><button onClick={submitTodos}>Add Task</button>
        
        <ul>
          {todos.map( (todo) => {
            return <List key={todo.id} id={todo.id} task={todo.text} todos={todos} setTodos={setTodos} todo={todo} date={todo.date} done={done} setDone={setDone}  ></List>
          })}
          
        </ul>

        <h1 className='done'> Done Task</h1>
        <ul>
          {done.map( (dn) => {
            return <li key={dn.id}>zadanie zakonczone : {dn.text}  </li>
          })}

          </ul>
      
        
    </div>

  )
}
