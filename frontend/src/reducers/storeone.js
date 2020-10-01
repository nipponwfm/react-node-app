import {initialValue} from '../../../backend/src/utils/initialValue'

const storeone = (state = {selected: {...initialValue}}, action) => {
    switch(action.type) {
        case 'setSelect-one': {
            return {
                selected: action.array.find(value => {
                    return value.name == action.selected
                })
            }
        }
        case 'resetSelect': {
            return {
                selected: {...initialValue}
            }
        }
        default: return state
    }
}

export default storeone