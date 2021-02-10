const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const card = new Schema({
    CodeCard: {
        type: Number,
        required: true,
    },
    points: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});
 
const cardModel = mongoose.model("Card", card); 
module.exports = cardModel;
 