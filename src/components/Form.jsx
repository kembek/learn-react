import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let title = this.state.title

    if (title) {
      this.props.onAddTask(title)
      this.setState({ title: '' })
    } else {
      alert('Enter the data for the task!!')
    }
  }

  handleChange(e) {
    let title = e.target.value

    this.setState({ title })
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          placeholder='What plan do you want to add?'
          onChange={this.handleChange}
        />
        <Button type='submit'>Add</Button>
      </form>
    )
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired
}

export default Form