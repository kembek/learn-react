import React, { Component } from 'react'

class Stats extends Component {
  render() {
    let count = this.props.statData.length
    let completed = this.props.statData.filter(data => data.status !== false).length
    let unCompleted = count - completed


    return (
      <table className='stats'>
        <tbody>
          <tr>
            <th>Всего задач</th>
            <td>{count}</td>
          </tr>
          <tr>
            <th>Выполнено</th>
            <td>{completed}</td>
          </tr>
          <tr>
            <th>Осталось</th>
            <td>{unCompleted}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Stats