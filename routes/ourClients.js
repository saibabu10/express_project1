const express = require('express')
const ourclients = express.Router();
ourclients.get('/',(resquest,response)=>{
    response.send("This page contains clients information")
})
module.exports = ourclients