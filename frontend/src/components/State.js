import React from 'react'
import ShipTypeButton from './ShipTypeButton'

const State = () => {
    return (
        <div className="frame">
            <div className="table head">
                <p className="attr">NAME</p>
                <p className="attr">TYPE</p>
                <p className="attr">LUCK</p>
                <p className="attr">ARMOR</p>
                <p className="attr">SPEED</p>
                <p className="attr">HP</p>
                <p className="attr">FP</p>
                <p className="attr">AA</p>
                <p className="attr">TORP</p>
                <p className="attr">EVA</p>
                <p className="attr">AVI</p>
                <p className="attr">OIL</p>
                <p className="attr">RELOAD</p>
                <p className="attr">ASW</p>
                <p className="attr">OXYGEN</p>
                <p className="attr">AMMUNITION</p>
                <p className="attr">ACC</p>
            </div>
            <ShipTypeButton />
        </div>
    )
}

export default State