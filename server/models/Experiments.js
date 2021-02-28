const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiments = new Schema({
    name: { type: String, required: true },
    img: String,
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    forWebsite: { type: String, require: true },
    sticky: { type: Boolean, default: false },
    stickyOrder: { type: Number, default: 0 }
});

const Experiments = mongoose.model('experiments', experiments);

module.exports = Experiments;