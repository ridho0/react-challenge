import Axios from 'axios'

export const searchAction = (newSearch) => {
  console.log('newSearch', newSearch);
  return (dispatch) => {
    Axios.get(`http://swapi.co/api/${newSearch}`)
      .then((response) => {
        let results = response.data.results
        console.log(results);
        dispatch({
          type: 'SEARCH',
          payload: results,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const changeNameAction = (newName) => {
  return {
    type: 'CHANGE_NAME',
    payload: newName,
  }
}
