import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import Form from './Form'
import Stats from './Stats'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: this.props.initialData
    }

    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  getNextId() {
    this._nextId = this._nextId || 5
    return this._nextId++
  }

  handleChangeStatus(id) {
    let tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status
      }

      return task
    })

    this.setState({
      tasks
    })
  }

  handleDeleteTask(id) {
    let tasks = this.state.tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }

  handleAddTask(title) {
    let task = {
      id: this.getNextId(),
      title,
      status: false
    }

    let tasks = [...this.state.tasks, task]

    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className='content'>
        
      </div>
    )
  }
}

TaskList.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }))
}

export default TaskList
