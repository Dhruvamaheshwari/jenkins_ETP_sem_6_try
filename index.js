const express = require('express')
const app =  express();
const port = 4000;


app.get('/' , (req  ,res)=>{
   res.send(`or ram kya hal h?? me mast hu tum batao are are bs bs etp aane bale h
            <br/> <br/>
         <a href="/done">Done</a>`)
})

app.get('/done' , (req , res)=>{
   res.send('ho gya paper devops ka , aab MVC ki prepration krni h')
})

app.listen(port , () => console.log(`server is listin on port ${port}`))