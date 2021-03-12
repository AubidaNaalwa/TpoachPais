const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
    name: { type: String , required: true },
    img: String,
    shortDescription: {type: String, required: true },
    longDescription: { type: String, required: true },
    available: { type: Boolean, default: true },
    duration: String,
    courseLink: String,
    forWebsite: { type: String, required: true },
    sticky: { type: Boolean, default: false },
    stickyOrder: { type: Number, default: 5 }
}, { timestamps: true });

const Courses = mongoose.model('courses', courses);

module.exports = Courses;