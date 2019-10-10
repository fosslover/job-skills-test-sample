'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    name: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here
    Faculty.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Faculty;
};