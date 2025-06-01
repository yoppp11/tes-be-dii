'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dataUser = require('../datas/user.json').map(user => {
      user.createdAt = user.updatedAt = new Date();
      return user
    })
    const dataDoctor = require('../datas/doctors.json').map(doctor => {
      doctor.createdAt = doctor.updatedAt = new Date();
      return doctor
    })

    await queryInterface.bulkInsert('Users', dataUser, {})
    await queryInterface.bulkInsert('Doctors', dataDoctor, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Doctors', null, {});
  }
};
