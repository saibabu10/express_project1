const express = require('express')
const app = express()

app.get('/',(request,response)=>{
    response.send("This is landing page")
})
app.listen(4500);