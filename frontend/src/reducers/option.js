const option = (state = {options: []}, action) => {
    switch(action.type) {
        case 'setOption': {
            return {
                options: action.value
            }
        }
        default: return state
    }
}

export default option