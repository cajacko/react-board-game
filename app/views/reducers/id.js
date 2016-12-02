export default function(state = false, action) {
  switch(action.type) {
    case 'SET_ID':
      return action.payload
    default:
      return state
  }
}