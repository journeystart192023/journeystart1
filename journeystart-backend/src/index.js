const express= require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const {mongodbstr,PORT}=require('./config')
const route=require('./route/route')
const app= express()
app.use(express.json())
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect(mongodbstr,{useNewUrlParser:true}).then(()=>{
    console.log("mongodb has connected")
}).catch((err)=>{
    console.log(err.message)
})
app.use('/',route);
app.listen(PORT||8080, ()=>{
console.log("server has started on the port : ",PORT||8080)
})