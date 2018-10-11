import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'
import Button from './Button'

class Task extends Component {
  render() {

    return (
      <div className={`todo${this.props.status ? ' completed' : ''}`}>
        <Checkbox status={this.props.status} handleClick={() => this.props.onChangeStatus(this.props.id)} />
        <span className='todo-title'>{this.props.title}</span>
        <Button onClick={() => this.props.onDeleteTask(this.props.id)} />
      </div>
    )
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
}

export default Task
