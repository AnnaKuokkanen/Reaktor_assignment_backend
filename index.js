const express = require('express')
const app = express()

const beanies = [
  {
    id: "6a40511dc47b94db523e3fb4",
    type: "beanies",
    name: "AKNYVE BOON",
    color: [
    "green",
    "black"
    ],
    price: 63,
    manufacturer: "niksleh"
    },
    {
    id: "498517b6e69ff38604074ade",
    type: "beanies",
    name: "GINSOPLEA GREEN BRIGHT",
    color: [
    "grey"
    ],
    price: 66,
    manufacturer: "umpante"
    },
    {
    id: "deb9bead9c0ee43d0a7c5d",
    type: "beanies",
    name: "AKSOPNY MAGIC ALPINE",
    color: [
    "black"
    ],
    price: 13,
    manufacturer: "umpante"
    },
  ]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/beanies', (req, res) => {
  res.json(beanies)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})