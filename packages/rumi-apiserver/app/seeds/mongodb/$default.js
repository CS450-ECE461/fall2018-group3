const {Seed} = require('@onehilltech/blueprint-mongodb');
const dab = require('@onehilltech/dab');


module.exports = Seed.extend ({
  model () {
    return {
      native: [
        {
          name: 'client0',
          client_secret: 'client0',
          email: 'client0@no-reply.com',
        }
      ],

      accounts: [
        {
          username: 'user0',
          password: 'user0',
          email: 'user0@no-reply.com',
        }
      ],

      user_tokens: [
        {
          client: dab.ref('native.0'),
          account: dab.ref('accounts.0'),
          scope: ['gatekeeper.account.*'],
          refresh_token: dab.id(),
        }
      ],

      client_tokens: [
        {
          client: dab.ref('native.0'),
          scope: ['gatekeeper.account.create']
        }
      ],

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