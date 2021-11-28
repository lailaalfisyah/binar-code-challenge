'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.UserGameBiodata, {
        foreignKey: 'userID'
      });
      this.hasMany(models.UserGameHistoy, {
        foreignKey: 'userID'
      });
    }
  };

  UserGame.init({
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserGame',
  });

  UserGame.associate = function(models){
    UserGame.hasOne(models.UserGameBiodata, {
      foreignKey: 'userID',
      as: 'UserGameBiodata'
    })
  };

  UserGame.associate = function(models){
    UserGame.hasMany(models.UserGameHistory, {
      foreignKey: 'userID',
      as: 'UserGameHistory'
    })
  };

  return UserGame;
};