const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    author: {
        type: String,
        required: true,
        min: 1,
        max: 25
    },
    description: {
        type: String,
        required: false,
        min: 1,
        max: 100
    },
    content: {
        type: String,
        required: true,
        min: 1,
        max: 1000
    }
}, { versionKey: false });

module.exports = mongoose.model("News", newsSchema);;
