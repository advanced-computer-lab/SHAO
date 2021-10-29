const express = require('express')
const app = express()
const port = 5055



app.listen(port, () => {
  console.log(`yo dawgs, check http://localhost:${port}`)
})