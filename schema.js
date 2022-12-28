const mongoose =require('mongoose')
const Schema = mongoose.Schema

const models = new Schema({
    image:{type:String},
    Title:{type:String},
    Description:{type:String}
})

const info =mongoose.model('Mblog',models)

module.exports=info