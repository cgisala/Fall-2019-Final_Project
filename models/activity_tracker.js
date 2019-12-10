'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity_Tracker = sequelize.define('Activity_Tracker', {
    date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    activity: DataTypes.STRING
  }, {});
  Activity_Tracker.associate = function(models) {
    // associations can be defined here
  };
  return Activity_Tracker;
};