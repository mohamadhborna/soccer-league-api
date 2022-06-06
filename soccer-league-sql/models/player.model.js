const { sequelize, Sequelize } = require(".");

module.exports = (sequelize ,Sequelize) =>{
    const Player = sequelize.define("player" , {
        name:{
            type:Sequelize.STRING
        },
        age:{
            type:Sequelize.INTEGER
        }
    })
    return Player
}