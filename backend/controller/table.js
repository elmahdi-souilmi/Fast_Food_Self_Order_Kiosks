const tableModel = require('../model/table.model');
//get free table
function getfreetable(req, res) {

       tableModel.find({
           isBusy: `false`
       }).then((card) => {
           res.json(card)
       })
}
module.exports = {
    getfreetable
}