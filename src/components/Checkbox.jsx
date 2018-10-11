import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  render() {
    return (
      <button className='checkbox icon' onClick={this.props.handleClick}>
        <i className='material-icons'>{this.props.status ? 'check_box' : 'check_box_outline_blank'}</i>
      </button>
    )
  }
}

Checkbox.propTypes = {
  status: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Checkbox