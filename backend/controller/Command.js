const commandModel = require('../model/Commande.model');

function Addcommand(req, res) {
    let card = {
        NumCommande: req.body.NumCommande,
        DateCommande: req.body.DateCommande,
        Produit: req.body.Produit,
        Table: req.body.Table,
        CodePromo: req.body.CodePromo,
        productQuantity: req.body.productQuantity,
    };
    commandModel.create(card)
        .then(() => {
            return res.status(200).json({
                "message": `commend added`
            });
        }).catch(err => {
            return res.status(500).json({
                "message": " command Is not added",
                "err": err
            });
        })
}

module.exports = {
    Addcommand
}