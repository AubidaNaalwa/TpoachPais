const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paisSchema = new Schema({
    todo1: String,
    todo2: String,
    todo3: String
});

const PaisSchema = mongoose.model('pais', paisSchema, 'pais');

module.exports = PaisSchema;