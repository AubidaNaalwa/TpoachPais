const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiments = new Schema({
    name: { type: String , required: true },
    img: { type:String , required: true },
    defaultImg:{ type:String , required: true },
    shortDescription: {type: String , required: true},
    longDescription: { type: String , required: true },
    category:{type: String, required:true}
});

const Experiments = mongoose.model('experiments', experiments);

module.exports = Experiments;