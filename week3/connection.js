const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('books_data', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
})
// 定義一個叫做 Book 的資料結構
const Book = sequelize.define(
  'Book',
  {
    // 定義 Model 屬性
    id: {
      // 欄位名稱
      type: Sequelize.INTEGER, //  資料型態
      autoIncrement: true,
      primaryKey: true,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageLink: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
)
