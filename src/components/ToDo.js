import React, { useState } from 'react'

import './todo.css'

export default function ToDo(props) {



  return (
    <div className='todo'>
       <li>{props.value}</li>
       <button className='btn-add'>+</button>
       <button className='btn-done'>done</button>
               
        
    </div>
  )
}
