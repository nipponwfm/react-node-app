import { createStore, combineReducers } from 'redux'
import option from '../reducers/option'
import storeone from '../reducers/storeone'
import storetwo from '../reducers/storetwo'

const store = createStore(combineReducers({
    option,
    storeone,
    storetwo
}))

store.subscribe(() => {
    console.log(store.getState())
})

export default store