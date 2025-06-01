'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id'
      });
    }
  }
  Schedule.init({
    doctor_id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Quota is required'
        },
        notEmpty: {
          msg: 'Quota cannot be empty'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Date is required'
        },
        notEmpty: {
          msg: 'Date cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};