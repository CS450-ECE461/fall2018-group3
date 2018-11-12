const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
  specification: {
    '/users': {
      resource: {
        controller: 'user'
      }
    }
  }
});
