import React, {  useState } from 'react'
import RemoveElement from './RemoveElement'

import './todo.css'

export default function ToDo({todos , setDodos , task ,setTask } ) {

  let [checked , setChecked] = useState(false)
  
  let [removeItem , setRemoveItem] = useState('')
  const handleRemove = (item) => {

    
    console.log(todos)
    const index = todos.findIndex( (task,i) => task[i] === item[i] )
    const deleteTask = todos.splice(index , 1)
    console.log(deleteTask)
    setDodos(todos)
    document.querySelector('li').classList.add('decor')
    
  }

  const handleDone = (e) => {
        const x = document.querySelector('.list-element')
    setChecked(
    checked = !checked ,
    checked ? x.classList.add('decor') : null
    )
   
  } 



  return (
    <div className='todo'>
      
      <ul>
      {todos.map( (todo) => {
        return <li className='list-element' key={todo.id} >{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={handleRemove}>Remove</button></li>
      })}
      </ul>

      <RemoveElement checked={checked} ></RemoveElement>

      
    </div>
  )
}
