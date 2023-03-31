import React from 'react'
import OneTask from './OneTask'

export default function List(props) {
  return (
    <div className='todo'>
        
        <OneTask  task={props.task} id={props.id}></OneTask>
        
    </div>
  )
}
