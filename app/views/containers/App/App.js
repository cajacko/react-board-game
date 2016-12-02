import React from 'react'
import {connect} from 'react-redux'
import App from '~/components/App/App'
import socket from '~/helpers/socket'
import {setGameState} from '~/actions/gameState'
import {setStatus} from '~/actions/status'
import {takeTurn} from '~/actions/turn'

const AppContainer = React.createClass({
  getInitialState: function() {
    return {
      error: false
    }
  },

  setStatus: function(props) {
    // console.log(props, 1)

    if (props.status) {
      return false
    }

    // console.log(props, 2)

    if (!props.gameState) {
      return false
    }

    // console.log(props, 3)

    if (!props.gameState.game) {
      return props.dispatch(setStatus('GAME'))
    }

    // console.log(props, 4)

    if (!props.gameState.player1) {
      return props.dispatch(setStatus('PLAYER_1'))
    }

    // console.log(props, 5)

    if (!props.gameState.player2) {
      return props.dispatch(setStatus('PLAYER_2'))
    }

    // console.log(props, 6)

    this.setState({
      error: true
    })
  },

  componentDidMount: function() {
    const dispatch = this.props.dispatch

    socket.on('getState', function (state) {
      dispatch(setGameState(state))
    })

    this.setStatus(this.props)
  },

  componentWillReceiveProps: function(nextProps) {
    this.setStatus(nextProps)
  },

  turn: function(event, row, column, value) {
    event.preventDefault()

    console.log('turn', row, column, value)

    if (this.props.status == 'GAME') {
      return false
    }

    console.log(1)

    if (this.props.value) {
      return false
    }

    console.log(2)

    this.props.dispatch(takeTurn(row, column))   
  },

  render: function() {
    return (
      <App 
        status={this.props.status} 
        gameState={this.props.gameState}
        id={this.props.id}
        turn={this.turn}
      />
    )
  }
})

function mapStateToProps(state) {
  return {
    gameState: state.gameState,
    status: state.status,
    id: state.id
  }
}

export default connect(mapStateToProps)(AppContainer)