const initialState = {
  name: 'starships'
}

export default (state = initialState, action)=> {
  if(action.type === 'CHANGE_NAME') {
    return {...state, name: action.payload}
  }
  return state
}
