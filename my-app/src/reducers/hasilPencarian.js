const initialState = {
  starships : []
}

export default (state = initialState, action) => {
  if(action.type === 'SEARCH') {
    return {...state, starships: action.payload}
  }
  return state
}

// const { starships } = this.state.starships
// this.setState({
//   starships: starships.concat(ship)
// })
//
// let next = ''
// Axios.get(`http://swapi.co/api/${this.state.name}`)
//   .then((response) => {
//     let ships = response.data.results
//     ships.map((ship) => {
//       this.addStarship(ship)
//     })
//
//   })
//   .catch((err) => {
//     console.log(err)
//   })
