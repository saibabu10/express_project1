const express = require("express")
const contactus = express.Router()
contactus.get('/',(request,response)=>{
    response.send("This contact us page")
})
module.exports = contactus