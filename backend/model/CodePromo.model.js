const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CodePromo = new Schema({
    Code: {
        type: Number,
        required: true,
        min: 4,
    },
     Promo: {
         type: String,
         required: true,

     },


});
const CodePromoModel = mongoose.model("CodePromo", CodePromo);
// let carda = {
//     Code: 12375,
//     Promo: " promo -20% ",

// };
//  CodePromoModel.create(carda)
module.exports = {CodePromoModel,CodePromo};
