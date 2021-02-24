const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceNews = new Schema({
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    date:{ type: Date, default: Date.now },
    toDate: { type: String, required: true }
});

const SpaceNews = mongoose.model('spaceNews', spaceNews);

module.exports = SpaceNews;