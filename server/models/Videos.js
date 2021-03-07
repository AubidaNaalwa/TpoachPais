const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const video = new Schema({
    name: { type: String , required: true },
    video: { type: String , required: true },
    thumbnail: { type: String, required: true },
    description: String,
    forWebsite: { type: String, required: true }
});

const Videos = mongoose.model('video', video);

module.exports = Videos;