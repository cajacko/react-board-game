export default function(state = false, action) {
  switch(action.type) {
    case 'SET_STATUS':
      return action.payload
    default:
      return state
  }
}