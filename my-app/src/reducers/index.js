
import { combineReducers } from 'redux'

import changeName from './changeName'
import hasilPencarian from './hasilPencarian'

export default combineReducers({
  search: hasilPencarian,
  name: changeName,
})
