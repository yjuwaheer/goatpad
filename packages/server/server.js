require('dotenv').config()

const PORT = process.env.PORT || 3001

const express = require('express')
const server = express()

server.get('/test', (req, res) => {
  res.json({ data: 'Hello from the server!' })
})

server.listen(PORT, () => console.log(`server listening on port ${PORT}`))
