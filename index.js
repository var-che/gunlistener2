
const express = require('express')
const Gun = require('gun');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(Gun.serve)


app.get('/', (req, res) => {
    res.send('Hello World!')
})


const server = app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

Gun({ web: server });