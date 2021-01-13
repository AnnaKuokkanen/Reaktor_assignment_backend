const express = require('express')
const app = express()
const axios = require('axios')

app.get('/api/beanies', (req, res) => {
  const beanies = 
  axios
    .get('https://bad-api-assignment.reaktor.com/v2/products/beanies')
    .then(response => {
      res.send(response.data)
    })
})

app.get('/api/facemasks', (req, res) => {
  const facemasks = 
  axios
    .get('https://bad-api-assignment.reaktor.com/v2/products/facemasks')
    .then(response => {
      res.send(response.data)
    })
})

app.get('/api/gloves', (req, res) => {
  const gloves = 
  axios
    .get('https://bad-api-assignment.reaktor.com/v2/products/gloves')
    .then(response => {
      res.send(response.data)
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})