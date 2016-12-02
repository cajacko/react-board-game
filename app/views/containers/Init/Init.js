import React from 'react'
import {connect} from 'react-redux'
import Init from '~/components/Init/Init'
import {setStatus} from '~/actions/status'
import socket from '~/helpers/socket'

const InitContainer = React.createClass({
  componentDidMount: function() {
    
  },

  newPlayer: function() {
    // socket.emit('setStatus', {status: 'PLAYER'})
    this.props.dispatch(setStatus('PLAYER'))
  },

  newGame: function() {
    // socket.emit('setStatus', {status: 'GAME'})
    this.props.dispatch(setStatus('GAME'))
  },

  render: function() {
    return (
      <Init 
        newGame={this.newGame}
        newPlayer={this.newPlayer}
      />
    )
  }
})

export default connect()(InitContainer)