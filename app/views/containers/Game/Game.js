import React from 'react'
import {connect} from 'react-redux'
import Game from '~/components/Game/Game'

const GameContainer = React.createClass({
  render: function() {
    return (
      <Game />
    )
  }
})

export default connect()(GameContainer)