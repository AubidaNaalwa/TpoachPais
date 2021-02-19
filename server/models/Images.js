const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const img = new Schema({
    name: { type: String , required: true },
    img: { type: String , required: true },
    date: { type: Date, default: Date.now },
    category: { type: String , required:true },
    forWebsite:{type:String, require:true}
});

const Images = mongoose.model('img', img);

module.exports = Images;