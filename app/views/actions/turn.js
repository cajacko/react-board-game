import fetcher from '~/helpers/fetcher'

function init() {
  return {
    type: 'TAKE_TURN_INIT'
  }
}

function success(data) {
  return {
    type: 'TAKE_TURN_SUCCESS',
    payload: data
  }
}

function error(error) {
  return {
    type: 'TAKE_TURN_ERROR',
    payload: error
  }
}

export function takeTurn(row, column) {
  return (dispatch, getState) => {
    const state = Object.assign({}, getState())
    var gameState = Object.assign({}, state.gameState)

    var symbol

    if (state.status == 'PLAYER_1') {
      symbol = 'X'
    } else {
      symbol = 'O'
    }

    gameState.score[row][column] = symbol

    dispatch(fetcher('setState', init, success, error, gameState))
  }
}