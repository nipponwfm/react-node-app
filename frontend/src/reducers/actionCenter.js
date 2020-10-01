import store from '../store/store'

const {dispatch} = store

const setOption = (value) => {
    dispatch({type:'setOption', value})
    dispatch({type:'resetSelect'})
}
const setSelectOne = (selected, array) => {dispatch({type:'setSelect-one', selected, array})}
const setSelectTwo = (selected, array) => {dispatch({type:'setSelect-two', selected, array})}

export {setOption, setSelectOne, setSelectTwo}