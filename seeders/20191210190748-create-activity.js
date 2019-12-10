'use strict';
const activity = [
  {
    "date": 12-1-2019,
    "duration": 1,
    "activity": "gym"
  },
  {
    "date": 12-1-2019,
    "duration": 1,
    "activity": "cooking"
  },
  {
    "date": 12-1-2019,
    "duration": 8,
    "activity": "work"
  },
  {
    "date": 12-2-2019,
    "duration": 1,
    "activity": "drawing"
  },
  {
    "date": 12-2-2019,
    "duration": 3,
    "activity": "cleaning"
  },
  {
    "date": 12-2-2019,
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

   return queryInterface.bulkInsert('Activity_Tracker', activityRecord, {})

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   
    return queryInterface.bulkDelete('Activity_Tracker', null, {})

  }
};
