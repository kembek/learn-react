import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import Form from './Form'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: this.props.initialData
    }

    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
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

  render() {
    return (
      <div className='content'>
        <section className='todo-list'>
          {
            this.state.tasks.map(task =>
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                onChangeStatus={this.handleChangeStatus}
                onDeleteTask={this.handleDeleteTask}
              />)
          }
        </section>
        <Form />
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
