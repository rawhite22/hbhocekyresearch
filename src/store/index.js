// redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// reducers
import comparePlayers from '../reducers/playerCompare.reducer'
import teamStats from '../reducers/teamStats.reducer'
import playerInfo from '../reducers/playerInfo.reducer'
// thunk
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store
const store = createStore(
  combineReducers({ comparePlayers, teamStats, playerInfo }),
  composeEnhancers(applyMiddleware(thunk))
)
export default store
