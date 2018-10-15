import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import logo from './logo.svg';

import Modal from './components/Modal';

export default class App extends Component {
  state = {
    isModal: false
  }

  handleModal = () => { this.setState(state => ({ isModal: !state.isModal })) }

  render() {
    return (
      <div className="app">
        <header>
          <img src={logo} alt="React logo" />
          <h1>React 16</h1>
        </header>

        <main>
          <button onClick={this.handleModal}>Open</button>

          {
            this.state.isModal &&
            <Modal onClose={this.handleModal}>HEllO evrybody I'm model window!!</Modal>
          }
        </main>
      </div>
    );
  }
}