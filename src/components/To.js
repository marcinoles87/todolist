import React from 'react'

export default function To({text ,id}) {
  return (
    
        <li key={id}>{text}
         <button className='btn-add'>+</button>
           <button className='btn-done'>done</button>
    </li>
  )
}
