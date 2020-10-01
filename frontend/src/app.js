import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import FrameOne from './components/FrameOne'
import FrameTwo from './components/FrameTwo'
import State from './components/State'
import './styles/style.scss'

import { setSelectOne, setSelectTwo } from './reducers/actionCenter'

const root = document.getElementById("root")

ReactDOM.render(
    <Provider store={store}>
        <h1>Stat at LV120</h1>
        <div id="frame-container">
            <State />
            <FrameOne/>
            <FrameTwo/>
        </div>
    </Provider>
, root)