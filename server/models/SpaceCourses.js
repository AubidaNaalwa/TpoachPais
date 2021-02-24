const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceCourses = new Schema({
    name: { type: String, required: true },
    img: { type:String, required: true },
    shortDescription: {type: String, required: true},
    longDescription: { type: String, required: true },
    available: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    toDate: { type: String, required: true },
    courseLink: { type: String , required: true },
    teacher: String,
    class: String
});

const SpaceCourses = mongoose.model('spaceCourses', spaceCourses);

module.exports = SpaceCourses;