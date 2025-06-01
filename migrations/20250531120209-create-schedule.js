'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id'
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Doctor ID is required'
          },
          notEmpty: {
            msg: 'Doctor ID cannot be empty'
          }
        }
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Day is required'
          },
          notEmpty: {
            msg: 'Day cannot be empty'
          }
        }
      },
      time_start: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Start time is required'
          },
          notEmpty: {
            msg: 'Start time cannot be empty'
          }
        }
      },
      time_finish: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Finish time is required'
          },
          notEmpty: {
            msg: 'Finish time cannot be empty'
          }
        }
      },
      quota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Quota is required'
          },
          notEmpty: {
            msg: 'Quota cannot be empty'
          },
          min: {
            args: 1,
            msg: 'Quota must be at least 1'
          }
        }
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        validate: {
          notNull: {
            msg: 'Status is required'
          },
          notEmpty: {
            msg: 'Status cannot be empty'
          }
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Date is required'
          },
          notEmpty: {
            msg: 'Date cannot be empty'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};