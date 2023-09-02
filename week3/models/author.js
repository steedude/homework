'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      this.hasMany(models.Book, {
        foreignKeys: 'authorId',
      })
    }
  }
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Author',
      tableName: 'Authors',
    }
  )
  return Author
}
