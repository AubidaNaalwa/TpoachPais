const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceExperiments = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    defaultImg: { type:String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    category: { type: String, required: true }
});

const SpaceExperiments = mongoose.model('spaceExperiments', spaceExperiments);

module.exports = SpaceExperiments;