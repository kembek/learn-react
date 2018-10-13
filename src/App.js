import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios'

import Header from './components/Header'
import Task from './components/Task'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }

    this.handleChangeStatus = this.handleChangeStatus.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleEditTask = this.handleEditTask.bind(this)
  }

  handleError(error) {
    console.error({
      message: error.message,
      stack: error.stack
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/todos')
      .then(response => response.data)
      .then(todos => this.setState({ tasks: todos }))
      .catch(this.handleError)
  }

  handleChangeStatus(id) {
    axios.patch(`/api/todos/${id}`)
      .then(response => {
        let tasks = this.state.tasks.map(task => {
          if (task.id === id) { task = response.data }
          return task
        })
        this.setState({ tasks })
      })
      .catch(this.handleError)
  }

  handleDeleteTask(id) {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        let tasks = this.state.tasks.filter(task => task.id !== id)

        this.setState({
          tasks
        })
      })
      .catch(this.handleError)
  }

  handleAddTask(title) {
    axios.post('/api/todos/', { title })
      .then(response => response.data)
      .then(todo => {
        let tasks = [...this.state.tasks, todo]

        this.setState({
          tasks
        })
      })
      .catch(this.handleError)
  }

  handleEditTask(id, title) {
    axios.put(`/api/todos/${id}`, { title })
      .then(response => {
        let tasks = this.state.tasks.map(task => {
          if (task.id === id) { task = response.data }
          return task
        })
        this.setState({ tasks })
      })
      .catch(this.handleError)
  }

  render() {
    return (
      <main>
        <Header title='React todo better' tasks={this.state.tasks} />
        <CSSTransitionGroup
          component='section'
          className='todo-list'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName='slide'
          transitionTimeout={500}
          transitionLeaveTimeout={500}>
          {
            this.state.tasks.map(task =>
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                onChangeStatus={this.handleChangeStatus}
                onDeleteTask={this.handleDeleteTask}
                onEditTask={this.handleEditTask}
              />)
          }
        </CSSTransitionGroup>
        <Form onAddTask={this.handleAddTask} />
      </main>
    )
  }
}

App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }))
}

export default App