import { createStore, combineReducers } from 'redux';
import nbMovesPlayed from './reducers/nbMovesPlayed'
import changeLangage from './reducers/changeLangage'


export default createStore(combineReducers({nbMovesPlayed, changeLangage}))
