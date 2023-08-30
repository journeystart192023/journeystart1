const express= require('express');
const router=express.Router();
router.post('/test' , (req,res)=>{
    return res.status(400).send({status:true,message:"successful demo"})
})
module.exports=router