import express from'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/json-test', (req,res) => {
    res.send({
        message: 'json test ok'
    })
})

app.listen(3009, () => {
    console.log('server is connected at port 3009')
})