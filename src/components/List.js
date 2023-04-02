import React from 'react'
import OneTask from './OneTask'

export default function List(props) {
  return (
    <div className='todo'>
        
        <OneTask  task={props.task} id={props.id} todos={props.todos} setTodos={props.setTodos} todo={props.todo} date={props.date}></OneTask>
        
    </div>
  )
}
