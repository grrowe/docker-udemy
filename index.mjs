import express from 'express'
import dbStuff from './helper.mjs'

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hello docker man!</h2>')
})

await dbStuff()

app.listen(3000)