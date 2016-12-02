import React from 'react'

const Cell = React.createClass({
  render: function() {
    return (
      <td><button style={{height: 50, width: 50}} onClick={(e) => this.props.turn(e, this.props.row, this.props.column, this.props.value)}>{this.props.value}</button></td>
    )
  }
})

const Row = React.createClass({
  render: function() {
    return (
      <tr>
        <Cell row={this.props.row} column={0} turn={this.props.turn} value={this.props.value[0]} />
        <Cell row={this.props.row} column={1} turn={this.props.turn} value={this.props.value[1]} />
        <Cell row={this.props.row} column={2} turn={this.props.turn} value={this.props.value[2]} />
      </tr>
    )
  }
})

const Game = React.createClass({
  render: function() {
    return (
      <table>
        <tbody>
          <Row row={0} turn={this.props.turn} value={this.props.value[0]} />
          <Row row={1} turn={this.props.turn} value={this.props.value[1]} />
          <Row row={2} turn={this.props.turn} value={this.props.value[2]} />
        </tbody>
      </table>
    )
  }
})

const App = React.createClass({
  render: function() {
    if (!this.props.gameState.score) {
      return false
    }

    return (
      <div>
        <header><h1>{this.props.status}</h1></header>
        <Game 
          turn={this.props.turn}
          value={this.props.gameState.score}
        />
      </div>
    )
  }
})

export default App