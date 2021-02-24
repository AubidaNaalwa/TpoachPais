const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const video = new Schema({
    name: { type: String , required: true },
    video: { type: String , required: true },
    date: { type: Date, default: Date.now },
    description:String,
    forWebsite: { type: String, require: true }
});

const Videos = mongoose.model('video', video);

module.exports = Videos;