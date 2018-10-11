import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let title = this.props.refs.title
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <input type='text' ref='title' placeholder='What plan do you want to add?' />
        <Button className='' type='submit'>Add</Button>
      </form>
    )
  }
}

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired
}

export default Form