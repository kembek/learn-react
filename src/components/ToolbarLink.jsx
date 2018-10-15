import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ToolBarLink extends Component {
  render() {
    return (
      <NavLink activeClassName="mdc-tab--active" {...this.props}>{this.props.children}</NavLink>
    )
  }
}

export default ToolBarLink