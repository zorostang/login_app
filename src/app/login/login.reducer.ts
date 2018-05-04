export default function login(state = [], action) {
  switch (action.type) {
    case 'ADD_LOGIN_CREDENTIAL':
      return state.concat([action.payload])
    default:
      return state
  }
}
