const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courses = new Schema({
    name:{type:String , required:true},
    img:{type:String , required:true},
    shortDescription:{type:String , required:true},
    longDescription:{type:String , required:true},
    avilibailty:{type:Boolean, default:true}
})

const Courses = mongoose.model('courses', courses) 

module.exports = Courses