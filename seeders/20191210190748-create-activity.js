'use strict';
const activity = [
  {
    "date": new Date(),
    "duration": 1,
    "activity": "gym"
  },
  {
    "date": new Date(),
    "duration": 1,
    "activity": "cooking"
  },
  {
    "date": new Date(),
    "duration": 8,
    "activity": "work"
  },
  {
    "date": new Date(),
    "duration": 1,
    "activity": "drawing"
  },
  {
    "date": new Date(),
    "duration": 3,
    "activity": "cleaning"
  },
  {
    "date": new Date(),
    "duration": 8,
    "activity": "sleep"
  }
]
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   var activityRecord = activity.map(function(s) {
     s.createdAt = new Date(),
     s.updatedAt = new Date()
     return s
   })

   return queryInterface.bulkInsert('Activity_Trackers', activityRecord, {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   
    return queryInterface.bulkDelete('Activity_Trackers', null, {})

  }
};
