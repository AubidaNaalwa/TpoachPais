const mongoose = require('mongoose')
const Schema = mongoose.Schema

const events = new Schema({
    name:{type:String , required:true},
    img:{type:String , required:true},
    shortDescription:{type:String , required:true},
    longDescription:{type:String , required:true},
    avilibailty:{type:Boolean, default:true}
})

const Events = mongoose.model('events', events) 

module.exports = Events