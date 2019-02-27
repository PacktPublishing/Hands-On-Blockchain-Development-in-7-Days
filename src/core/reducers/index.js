import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'

const rootReducer = combineReducers({
  provider: providerReducer
})

export default rootReducer
