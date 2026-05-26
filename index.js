const express = require('express')
const app = express()
const port = 4000;

app.get('/' , (req  ,res) => {
    res.send('kya haal h jee kese ho sb')
})

app.listen(port , ()=>console.log(`server is started at port ${port}`))
