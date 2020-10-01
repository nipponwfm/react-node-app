import React, {useEffect} from 'react'
import {getOption} from '../utils/getOption'

const shipType = ['Destroyer', 'LightCruiser', 'HeavyCruiser', 'Battleship', 'Carrier', 'Submarine', 'Auxiliary']

const ShipTypeButton = () => {
    useEffect(() => {
        getOption(shipType[0])
    }, [])

    return (
        <select className="choose type" name="id" onChange={() => { getOption(document.querySelector(".type").value)}}>
            {shipType.map((value) => <option value={value} key={value}>{value}</option>)}
        </select>
    )
}

export default ShipTypeButton