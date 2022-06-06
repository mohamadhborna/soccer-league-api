const {Op} = require('sequelize')
const db  =require("../models/index")
const { produceError } = require("../utils/error")
const Player = db.player

exports.create = async (req , res , next) =>{
    try {
        if(!req.body.name || !req.body.age){
            throw produceError('age or name can not be empty and can not create player' , 400)
        }
        const player = await Player.create({name :req.body.name , age:req.body.age})
        if(!player){
            throw produceError('can not create player for some reason' , 400)
        }
        return res.status(201).json({message:'player created succussfully'})
    } catch (error) {
        next(error)
    }
}

exports.findAll = async (req, res , next) => {
    try {
        const players = await Player.findAll({
            // where: {
            //     age : 34
            // }
            attributes: ['id','name', 'age']
        })
        if(!players){
            throw produceError('there is not any player' , 200)
        }
        return res.status(200).json(players)
    } catch (error) {
        next(error)
    }
  
};
// Find a single Player with an id
exports.findOne = async (req, res , next) => {
    try {
        const player = await Player.findByPk (req.params.id , {attributes:['id','name', 'age']})
        if(!player){
            throw produceError('there is not any player with this id' , 204)
        }
        return res.status(200).json(player)
    } catch (error) {
        next(error)
    }
};
// Update a Player by the id in the request
exports.update = async (req, res , next ) => {
    try {
        const player = await Player.findByPk(req.params.id)
        if(!player){
            throw produceError('there is not any player with this id' , 204)
        }
        await Player.update(req.body , {where:{id:req.params.id}})
        return res.status(200).json({message:'succusfully updated'})
    } catch (error) {
        next(error)
    }
};

exports.findspecificPlayers = async (req, res , next) => {
    try {
        const specificPlayers = await Player.findAll({
            where:{
                [Op.and]:[
                    {age : {[Op.gte] : 33}},
                    {name :  {[Op.like] : 'crist%'}}
                ]
        }})
        return res.status(200).json(specificPlayers)
    } catch (error) {
        next(error)
    }
};