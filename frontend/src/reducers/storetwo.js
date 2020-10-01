import {initialValue} from '../../../backend/src/utils/initialValue'

const storetwo = (state = {selected: {...initialValue}}, action) => {
    switch(action.type) {
        case 'setSelect-two': {
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

export default storetwo