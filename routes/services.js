const express = require("express")
const service = express.Router()
service.get('/',(request,response)=>{
    response.send("This is service")
})
module.exports = service