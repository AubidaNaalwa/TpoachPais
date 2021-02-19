const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contact = new Schema({
    fullname:{type:String , required:true},
    email:{type:String , required:true},
    message:{type:String, required:true}
});

const Contact = mongoose.model('contact', contact)

module.exports = Contact;