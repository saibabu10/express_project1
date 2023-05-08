const express = require('express')
const upcoming = express.Router()
upcoming.get('/',(request,response)=>{
    response.send("Upcoming Projects")
})
module.exports = upcoming