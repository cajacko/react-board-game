import React from 'react'
import {connect} from 'react-redux'
import Player from '~/components/Player/Player'

const PlayerContainer = React.createClass({
  render: function() {
    return (
      <Player />
    )
  }
})

export default connect()(PlayerContainer)