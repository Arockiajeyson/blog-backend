const express =require('express')
const app =express()

const ResterSchemas =require('./registerSchema')

app.use(express.json())

app.post('/',async(req,res)=>{
    try {
        const data =req.body
        console.log(data)
        const store =await ResterSchemas.create(data)
        return res.json(store)
    } catch (error) {
        return res.json(error)
    }
})
module.exports=app