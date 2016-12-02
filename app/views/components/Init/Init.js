import React from 'react'

const Init = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.props.newGame}>New Game</button>
        <button onClick={this.props.newPlayer}>New Player</button>
      </div>
    )
  }
})

export default Init