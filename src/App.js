import React, { Component } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'


const tasks = [
  {
    id: 1,
    title: 'Lear JS',
    status: true
  },
  {
    id: 2,
    title: 'Lear ReactJS',
    status: false
  },
  {
    id: 3,
    title: 'Write application',
    status: true
  },
  {
    id: 4,
    title: 'Go Home',
    status: false
  }
]

class App extends Component {
  render() {
    return (
      <main>
        <Header title='React todo better' tasks={tasks} />
        <TaskList initialData={tasks} />
        
      </main>
    )
  }
}

export default App