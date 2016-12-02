import fetcher from '~/helpers/fetcher'

function init() {
  return {
    type: 'SET_STATUS_INIT'
  }
}

function success(data) {
  return {
    type: 'SET_STATUS_SUCCESS',
    payload: data
  }
}

function error(error) {
  return {
    type: 'SET_STATUS_ERROR',
    payload: error
  }
}

export function setStatus(status) {
  return (dispatch, getState) => {

    const state = Object.assign({}, getState())
    var gameState = Object.assign({}, state.gameState)

    const id = Math.random()

    switch(status) {
      case 'GAME':
        gameState.game = id
        break
      case 'PLAYER_1':
        gameState.player1 = id
        break
      case 'PLAYER_2':
        gameState.player2 = id
        gameState.turn = id
        break
    }

    dispatch({
      type: 'SET_ID',
      payload: id
    })

    dispatch({
      type: 'SET_STATUS',
      payload: status
    })

    dispatch(fetcher('setState', init, success, error, gameState))
  }
}