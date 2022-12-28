const express =require('express')
const app =express()
const resch=require('./schema')
const colud =require('./cloudr')
app.use(express.json())
const files =require('express-fileupload')
app.use(files({useTempFiles:true}))
app.post('/posting',async(req,res)=>{
    try {
        console.log(req.body)
        //{ titels: 'hello', imgs: 'C:\\fakepath\\771856.jpg', des: 'gooo' }
       const { titels,imgs,des}=req.body
       const imge =await colud.uploader.upload(imgs,{
        public_id:`${Date.now()}`,
        resource_type:'auto',
        folder:'prtFolter'
       })
        console.log(imge)
        const data =await resch.create({
            Title:titels,
            image:imge.secure_url,
            Description:des
        })
        console.log(req.body)
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