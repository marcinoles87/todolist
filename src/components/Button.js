import React from 'react'

export default function Button(props) {

   
  return (
    <div>
        <button>Add task</button>
        <h1>Your daily task:</h1>
        <ul>
          <li>{props.value}</li>
        </ul>
    </div>
  )
}
