const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const events = new Schema({
    name: { type: String, required: true },
    img: String,
    shortDescription: { type: String, required: true },
    longDescription: String,
    date: { type: Date, default: Date.now },
    toDate: String,
    forWebsite: { type: String, require: true },
    sticky: { type: Boolean, default: false },
    stickyOrder: { type: Number, default: 0 }
});

const Events = mongoose.model('events', events);

module.exports = Events;