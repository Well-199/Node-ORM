const { DataTypes } = require("sequelize") 
const sequelize = require("../instances/pg") 

const Phrase = sequelize.define('Phrase', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    author: {
        type: DataTypes.STRING
    },

    txt: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'phrases',
    timestamps: false
})

module.exports = Phrase