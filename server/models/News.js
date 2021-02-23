const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const news = new Schema({
    name: { type: String , required: true },
    shortDescription: { type: String , required: true },
    longDescription: { type: String , required: true },
    date: { type: Date, default: Date.now },
    toDate: { type: String, required: true }
});

const News = mongoose.model('news', news);

module.exports = News;