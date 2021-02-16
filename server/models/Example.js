const mongoose = require('mongoose')
const Schema = mongoose.Schema

const example = new Schema({
    name:{type:String , required:true}
})

const Example = mongoose.model('example', example) 

module.exports = Example