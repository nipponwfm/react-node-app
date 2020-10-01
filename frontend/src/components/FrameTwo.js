import React from 'react'
import {connect} from 'react-redux'
import {setSelectTwo} from '../reducers/actionCenter'

const FrameTwo = ({option, selected}) => {
    return (
        <div className="frame">
            <div className="table data">
                {/* <img alt="character" /><br /> */}
                <p>{selected.name}</p>
                <p>{selected.type}</p>
                <p>{selected.luck}</p>
                <p>{selected.armor}</p>
                <p>{selected.spd}</p>
                <p>{selected.hp}</p>
                <p>{selected.fp}</p>
                <p>{selected.aa}</p>
                <p>{selected.torp}</p>
                <p>{selected.eva}</p>
                <p>{selected.avi}</p>
                <p>{selected.oil}</p>
                <p>{selected.reload}</p>
                <p>{selected.asw}</p>
                <p>{selected.oxygen}</p>
                <p>{selected.ammu}</p>
                <p>{selected.acc}</p>
            </div>
            <select className="choose ship two" onChange={() => {setSelectTwo(document.querySelector(".two").value, option)}}>
                {option.map((value) => <option value={value.name} key={value.name}>{value.name}</option>)}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        option: state.option.options,
        selected: state.storetwo.selected
    }
}

export default connect(mapStateToProps)(FrameTwo)