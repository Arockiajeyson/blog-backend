const express =require('express')
const app =express()
const resch=require('./schema')

app.use(express.json({limit:'5mb'}))
const files =require('express-fileupload')
const body=require('body-parser')
app.use(body.urlencoded({extended:true}))

app.use(body.json())
app.use(files({useTempFiles:true}))
app.post('/posting',async(req,res)=>{
    try {
        // console.log(req.body)
        const { titels,imgs,des}=req.body
        const data =await resch.create({
            image:imgs,
            Title:titels,
            Description:des
        })
        res.json(data)
    } catch (error) {
        return res.json(error)
    }
})
app.get('/geting',async(req,res)=>{
    try {
        const finding =await resch.find()
        return res.json(finding)
    } catch (error) {
        return res.json(error)
    }
})
module.exports=app