const express = require("express")
const service = express.Router()
const listOfServices=[
    {
   
    'sname':'computer hardware'
},{
   
    'sname':'computer software'
},{
    
    'sname':'Network support'
}]
service.get('/',(request,response)=>{
    response.send("service page")
})
service.get('/:id',(request,response)=>{
// const serviceId = Number(request.params.id)
// const isAvail = listOfServices.find((service)=>service.id===serviceId)
// if(!isAvail){
//     response.send("invalid")
// }
// else{
//     response.json(isAvail.sname)
// }
response.send(request.serviceuser.sname)
})
service.param('id',(request,response,next,id)=>{
    request.serviceuser = listOfServices[id-1]
    next()
})
module.exports = service
