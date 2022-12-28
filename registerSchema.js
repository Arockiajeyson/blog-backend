const mongoose =require('mongoose')
const Schema = mongoose.Schema

const models = new Schema({
    email:{type:String},
    password:{type:String}
})
const Minfo =mongoose.model('Kblog',models)
module.exports=Minfo