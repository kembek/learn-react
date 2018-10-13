import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'
import Button from './Button'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }

    this.handleEditTask = this.handleEditTask.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.editing) {
      this.refs.title.focus()
      this.refs.title.select()
    }

  }

  handleEditTask(e) {
    e.preventDefault()
    let title = this.refs.title.value

    if (title) {
      this.props.onEditTask(this.props.id, title)
      this.setState({ editing: false })
    } else {
      alert('Enter the data for the task!!')
    }
  }

  taskDisplay() {
    return (
      <div className={`todo${this.props.status ? ' completed' : ''}`}>
        <Checkbox status={this.props.status} handleClick={() => this.props.onChangeStatus(this.props.id)} />
        <span className='todo-title'>{this.props.title}</span>

        <Button icon='edit' className='edit icon' onClick={() => this.setState({ editing: true })} />
        <Button icon='delete' className='delete icon' onClick={() => this.props.onDeleteTask(this.props.id)} />
      </div>
    )
  }

  editDisplay() {
    return (
      <form className='todo edit' onSubmit={this.handleEditTask}>
        <input type='text' ref='title' defaultValue={this.props.title} />
        <Button icon='save' className='save icon' type='submit' />
      </form>
    )
  }

  render() {

    return this.state.editing ? this.editDisplay() : this.taskDisplay()
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired
}

export default Task
