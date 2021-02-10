const cardModel = require('../model/CardFid.model');
//add fidel card 
function Addcard(req, res) {
    let card = {
        CodeCard: req.body.CodeCard,
        points: req.body.points,
        name: req.body.name
    };
    cardModel.create(card)
        .then(() => {
            return res.status(200).json({
                "message": `card added with code: ${req.body.CodeCard}`
            });
        }).catch(err => {
            return res.status(500).json({
                "message": "Is not added",
                "err": err
            });
        })
}
// get card by code
function getCard(req, res) {
    //let card;
    cardModel.findOne({
        CodeCard: `${req.params.CodCard}`
    }).then((card) => {
        res.json(card)
    })
}
// add point after taking a command 
function addpoint(req, res) {
    let newpoint = req.body.points + req.body.added;
    //to do : add conndition to check points and added are not null
    console.log(newpoint);
    cardModel.updateOne({
            CodeCard: req.params.id
        }, {
            points: newpoint
        })
        .then(() => res.status(201).json("card points successfully update"))
        .catch((err) => res.status(400).json("Error :" + err));
}
// delete point after using them 
function delpoint(req, res) {
    let newpoint = req.body.points - req.body.deleted;
    if (newpoint<0){
         res.status(400).json("Error :" + "you dont have enough pionts")
    }
    else{
    cardModel.updateOne({
            CodeCard: req.params.id
        }, {
            points: newpoint
        })
        .then(() => res.status(201).json("card points successfully update"))
        .catch((err) => res.status(400).json("Error :" + err));
    }
}

module.exports = {
    Addcard,
    getCard,
    addpoint,
    delpoint
};