import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('Hello World')
})

app.listen(3000, () => {
  console.log('server started2')
})