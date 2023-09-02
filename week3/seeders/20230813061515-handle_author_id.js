'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // const books = await queryInterface.sequelize.query(
    //   `UPDATE table SET column=field`
    // )
    await queryInterface.sequelize.query(`
      UPDATE Books AS b
      JOIN Authors AS a ON b.author = a.name
      SET b.authorId = a.id;
    `)
  },

  async down(queryInterface) {
    await queryInterface.bulkUpdate('books', { authorId: null }, {})
  },
}
