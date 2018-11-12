const {Seed} = require('@onehilltech/blueprint-mongodb');
const dab = require('@onehilltech/dab');


module.exports = Seed.extend ({
  model () {
    return {
      users: dab.times(10, (i) => {
        return {name: `user-${i}`, role: `admin`};
      }),

      tasks: dab.times(10, (i) => {
        return {
          title: `title-${i}`,
          description: `desc-${i}`,
          date_assigned: Date(),
          date_due: Date(),
          creator: dab.ref('users.0'),
          assignee: dab.ref(`users.${i}`),
          status: 'not-started'
        }
      })
    };
  }
});