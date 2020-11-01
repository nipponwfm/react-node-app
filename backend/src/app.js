const express = require('express')
const cors = require('cors')
const {fetchShipInfo} = require('./utils/fetchShipInfo')
const path = require('path')

const app = express()

app.get('/fetch', cors(), async (req, res) => {
    res.send({signal: await fetchShipInfo()})
})

app.get('/getshipoption', cors(), async (req,res) => {
    res.sendFile(path.join(__dirname, './data.json'))
})

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

app.get('*', async (req, res) => {
    res.sendFile(path.join(publicPath, './index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up at', port)
})