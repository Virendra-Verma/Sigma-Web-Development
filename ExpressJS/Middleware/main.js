const express = require('express')
const app = express()
const port = 3000
const blog = require("./routes/blog")
const fs = require("fs")

// app.use(express.static("Public"))

app.use('/blog',blog)

app.use((req, res, next)=>{
    console.log(req.headers)
    req.viren = "I'm Virendra"
    fs.appendFileSync("logs.txt",'${Date.now()} is a ${req.method}\n')
    console.log('${Date.now()} is a ${req.method}')
    // res.send("Hacked by viren")
    next()
})
app.use((req, res, next)=>{
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!'+req.viren)
})
app.get('/about', (req, res) => {
    res.send('Hello About')
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})