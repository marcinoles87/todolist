import React, {  useState } from 'react'
import RemoveElement from './RemoveElement'

import './todo.css'

export default function ToDo({todos , setDodos , task ,setTask ,id } ) {

  let [checked , setChecked] = useState(false)
  
  let [removeItem , setRemoveItem] = useState('')

 

  const handleRemove = (e) => {
    
    console.log(e.target.value)
    const idElement = e.target.value
    if(idElement === id){console.log('dziala')}
    const index = todos.findIndex( (todo,i) => todo.id === idElement)
    const deleteTask = todos.splice(index , 1)
    
    setDodos(todos)
    setRemoveItem(deleteTask)
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
        return <li className='list-element' key={todo.id} >{todo.text} <button className='btn-add' onClick={handleDone}>Done</button><button className='btn-done' onClick={handleRemove} value={todo.id}>Remove</button></li>
      })}
      </ul>

      <RemoveElement checked={checked} removeItem={removeItem}></RemoveElement>

      
    </div>
  )
}
