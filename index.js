const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
app.use(cors())
app.use(express.static('build'))

app.get('/api/products/:category', (req, res) => {
  const category = req.params.category;
  axios
    .get(`https://bad-api-assignment.reaktor.com/v2/products/${category}`)
    .then(response => {
      res.send(response.data);
    })
})

app.get('/api/availability/:manufacturer', (req, res) => {
  const manufacturer = req.params.manufacturer;
  axios
    .get(`https://bad-api-assignment.reaktor.com/v2/availability/${manufacturer}`)
    .then(response => {
      res.send(response.data);
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})