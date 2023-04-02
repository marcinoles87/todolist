import React from 'react'

import './todo.css'

export default function OneTask(props) {

  

  const {task , id , todos , setTodos , todo} = props
  
 const handleRemove = (e) => {

  setTodos( todos.filter( el => el.id !== todo.id))
  
 }

 const handleDone = (e) => {

  console.log(e.target.id)
 setTodos( todos.map( (item) => {
  if(item.id === todo.id){
   return { 
    ...item ,
    completed : !item.completed,

  
  }

  
  }
  return item
 
 }))

 
 }
 

  return (
    <>
        <li key={id}> {task}</li><button className='btn-done' onClick={handleDone} id={id}>Done</button><button id={id} value={task} onClick={handleRemove} className='btn-remove'>Remove</button>
    </>
  )
}
