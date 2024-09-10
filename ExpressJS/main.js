const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    console.log("Hey its a get request")
  res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log("Hey its a post request")
  res.send('Hello World!456')
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})