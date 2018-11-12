const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
  specification: {
    '/tasks': {
      resource: {
        controller: 'task'
      }
    }
  }
});
