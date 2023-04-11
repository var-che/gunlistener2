const express = require('express')
const Gun = require('gun')

const app = express()
const port = 8000
app.use(Gun.serve)
app.get('/test', (req, res) => {
  res.send('hello world')
})
const server = app.listen(port, () => {
    console.log("Lisstening at: http://localhost:" + port)
})

Gun({web: server})