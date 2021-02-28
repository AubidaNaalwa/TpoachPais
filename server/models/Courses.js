const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
    name: { type: String , required: true },
    img: String,
    shortDescription: {type: String, required: true },
    longDescription: { type: String, required: true },
    available: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    toDate: String,
    courseLink: String,
    forWebsite: { type: String, require: true },
    sticky: { type: Boolean, default: false },
    stickyOrder: { type: Number, default: 0 }
});

const Courses = mongoose.model('courses', courses);

module.exports = Courses;