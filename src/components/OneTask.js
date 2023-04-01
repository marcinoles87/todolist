import React from 'react'

import './todo.css'

export default function OneTask(props) {

  const {task , id , todos} = props
  
 const handleRemove = (e) => {
  console.log(e.target.value)
  console.log(e.target.id)
  
  if(e.target.value === task){
    console.log('dziala')
  }

  const index = todos.findIndex()
  
 }

  return (
    <>
        <li key={id}> {task}</li><button className='btn-done'>Done</button><button id={id} value={task} onClick={handleRemove} className='btn-remove'>Remove</button>
    </>
  )
}
