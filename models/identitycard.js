const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cardNo:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports=IdentityCard;