// We will combine all our reducers in here

import { combineReducers } from "redux"
import { productReducer } from "./productReducer"

const reducers = combineReducers({
  allProducts: productReducer
})

export default reducers
