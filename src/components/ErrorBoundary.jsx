import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    console.error(error)
    console.info(info)
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ?
      (
        <div className="app">
          <p>Извините, произошла ошибка :(</p>
          <button>Сообщить об ошибке</button>
        </div>
      )
      :
      this.props.children
  }

}

export default ErrorBoundary