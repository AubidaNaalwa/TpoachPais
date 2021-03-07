const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiments = new Schema({
    name: { type: String, required: true },
    img: String,
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    category: { type: String, required: true },
    forWebsite: { type: String, required: true },
    sticky: { type: Boolean, default: false },
    stickyOrder: { type: Number, default: 0 }
}, { timestamps: true });

const Experiments = mongoose.model('experiments', experiments);

module.exports = Experiments;