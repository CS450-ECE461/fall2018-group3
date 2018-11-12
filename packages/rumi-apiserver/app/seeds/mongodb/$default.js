const {Seed} = require('@onehilltech/blueprint-mongodb');
const dab = require('@onehilltech/dab');


module.exports = Seed.extend ({
  model () {
    return {
      users: dab.times(10, (i) => {
        return {name: `user-${i}`, role: `admin`};
      }),

      tasks: [
        {
          title: 'title-0',
          description: 'desc-0',
          date_assigned: Date.now(),
          date_due: Date.now(),
          creator: dab.ref('users.1'),
          assignee: dab.ref('users.1'),
          status: 'not-started'
        },
        {
          title: 'title-1',
          description: 'desc-1',
          date_assigned: Date.now(),
          date_due: Date.now(),
          creator: dab.ref('users.1'),
          assignee: dab.ref('users.2'),
          status: 'not-started'
        },
        {
          title: 'title-2',
          description: 'desc-2',
          date_assigned: Date.now(),
          date_due: Date.now(),
          creator: dab.ref('users.1'),
          assignee: dab.ref('users.3'),
          status: 'not-started'
        },
        {
          title: 'title-3',
          description: 'desc-3',
          date_assigned: Date.now(),
          date_due: Date.now(),
          creator: dab.ref('users.1'),
          assignee: dab.ref('users.1'),
          status: 'not-started'
        }
      ]
    };
  }
});