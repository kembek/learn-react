import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    // onClick={this.props.handleButtonClick}

    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        {...this.props}>
        {
          this.props.children || <i className='material-icons'>{this.props.icon}</i>
        }
      </button>
    )
  }
}

Button.propTypes = {
  handleButtonClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node
}

export default Button