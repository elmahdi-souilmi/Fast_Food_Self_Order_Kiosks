const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tableschema = new Schema({
    numTable: {
        type: Number,
        required: true,
    },
    isBusy: {
        type: Boolean,
        required: true,
    }
});
const tableModel = mongoose.model("table", tableschema);
//  let carda = {
//      numTable: "tablea",
//       isBusy: "true"

// } 
//   tableModel.create(carda)
module.exports = {
        tableModel,
        tableschema}