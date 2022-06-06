const db  =require("../models/index")
const Player = db.player

exports.create = async (req , res) =>{
    try {
        if(!req.body.name){
            return res.status(400).send({
                message:"player name should be available"
            })
        }
        const player = {
            name : req.body.name,
            age: req.body.age
        }
        await Player.create(player)   
    } catch (error) {
        
    }
}

exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};