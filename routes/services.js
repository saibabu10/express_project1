const express = require("express")
const service = express.Router()
const listOfServices=[
    {
    'id':1,
    'sname':'computer hardware'
},{
    'id':2,
    'sname':'computer software'
},{
    'id':3,
    'sname':'Network support'
}]
service.get('/',(request,response)=>{
    response.send("service page")
})
service.get('/:id',(request,response)=>{
const serviceId = Number(request.params.id)
const isAvail = listOfServices.find((service)=>service.id===serviceId)
if(!isAvail){
    response.send("invalid")
}
else{
    response.json(isAvail.sname)
}
})
module.exports = service
