const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
  specification: {
    '/polls': {
      resource: {
        controller: 'poll'
      }
    }
  }
});
