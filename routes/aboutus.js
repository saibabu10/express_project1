const express = require('express')
const aboutus = express.Router()
aboutus.get('/',(request,response)=>{
    response.send("This is the about page")
})
module.exports = aboutus