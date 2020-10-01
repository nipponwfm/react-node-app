import '@babel/polyfill'
import { setOption } from '../reducers/actionCenter'

const getTypeIndex = (type) => {
    switch(type) {
        case 'Destroyer': return 0
        case 'LightCruiser': return 1
        case 'HeavyCruiser': return 2
        case 'Battleship': return 3
        case 'Carrier': return 4
        case 'Submarine': return 5 
        case 'Auxiliary': return 6
    }
}

const getOption = async (type) => {
    const index = getTypeIndex(type)
    await fetch('/getshipoption').then(response => response.json().then((data) => {
        setOption(data[index])
    }))
}

export {getOption}