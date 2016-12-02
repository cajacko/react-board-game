export default function(state = false, action) {
  switch(action.type) {
    case 'SET_GAME_STATE':
    case 'SET_STATUS_SUCCESS':
    case 'TAKE_TURN_SUCCESS':
      return action.payload
    default:
      return state
  }
}