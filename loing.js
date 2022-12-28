const express =require('express')
var jwt = require('jsonwebtoken');
const app =express()
app.use(express.json())
const ResterSchemas =require('./registerSchema')
app.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {email,password}=req.body
        const data =await ResterSchemas.findOne({email:email})
        if(data){
            const token =jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (100 * 100),
                data: data
              }, 'secret');
              console.log(token)
              return res.json(token)
        }else{
            return res.json('email is not there ')
        }
    } catch (error) {
        return res.json(error)
    }
})
module.exports=app