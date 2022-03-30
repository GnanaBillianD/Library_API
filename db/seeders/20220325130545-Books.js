'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      name: 'Outlander',
      category: 'historical',
      author: 'Diana Gabaldon',
      price: 237.30,
      notes: 'Outlander is a historical fantasy novel by Diana Gabaldon first published in 1991.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Out',
      category: 'historical',
      author: 'Gabaldon',
      price: 127.30,
      notes: 'Out is a historical fantasy novel by Gabaldon first published in 1991.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'hi',
      category: 'blog',
      author: 'beni',
      price: 456.30,
      notes: ' hi is fantasy novel by beni first published in 1991.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};