'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: 'authorId',
      })
    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { len: { args: [2, 50], msg: '文字長度不符合規定' } },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'Books',
      // underscored: true,
    }
  )
  return Book
}
