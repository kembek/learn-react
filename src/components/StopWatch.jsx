import React, { Component } from 'react'

import Button from './Button'

class StopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      running: false,
      elapsed: 0,
      lastTik: 0
    }

    this.handlePause = this.handlePause.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.tick = this.tick.bind(this)
  }

  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  tick() {
    if (this.state.running) {
      let now = Date.now()
      let diff = now - this.state.lastTik

      this.setState({
        elapsed: this.state.elapsed + diff,
        lastTik: now
      })
    }
  }

  handlePlay() {
    this.interval = setInterval(this.tick, 1000)
    this.setState({
      running: true,
      lastTik: Date.now()
    })
  }

  handlePause() {
    this.setState({ running: false })
  }

  handleStop() {
    this.setState({
      running: false,
      elapsed: 0,
      lastTik: 0
    })
    clearInterval(this.interval)
  }

  format(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60

    return `${
      minutes > 9 ?
        minutes : '0' + minutes}:${
      seconds > 9 ?
        seconds : '0' + seconds
      }`
  }

  render() {
    let time = this.format(this.state.elapsed)

    return (
      <section className='stopwatch'>
        <div className='stopwatch-time'>{time}</div>

        <div className='stopwatch-controls'>
          {
            this.state.running ?
              <Button className='icon' icon='pause' onClick={this.handlePause} />
              :
              <Button className='icon' icon='play_arrow' onClick={this.handlePlay} />
          }
          <Button className='icon' icon='stop' onClick={this.handleStop} />
        </div>
      </section>
    )
  }
}

export default StopWatch