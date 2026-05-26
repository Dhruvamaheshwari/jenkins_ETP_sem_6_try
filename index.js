const express = require('express')
const app = express()
const port = 4000;

app.get('/' , (req  ,res) => {
    res.send('hey , How are yoy Guys')
})

app.listen(port , ()=>console.log(`server is started at port ${port}`))
