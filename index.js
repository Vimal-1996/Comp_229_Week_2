const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/exams', (req, res) => {
    res.send('exams getting scheduled')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
