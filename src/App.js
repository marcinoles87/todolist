import Task from './components/Task';
import './App.css';

import React, { Component } from 'react'

import TaskDone from './components/TaskDone';

export default class App extends Component {

  

  render() {
    return (
      <div className='App'>
        <Task></Task>
        <TaskDone></TaskDone>
      </div>
    )
  }
}

