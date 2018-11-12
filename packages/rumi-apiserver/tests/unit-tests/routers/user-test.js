const {request} = require('@onehilltech/blueprint-testing');
const {seed} = require('@onehilltech/blueprint-mongodb');

describe('app | routers | user', function () {
  context('GET', function () {
    it('should get all users', function () {
      return request()
        .get('/v1/users')
        .expect(200);
    });

    it('should get an individual user', function () {
      const {users: [,,user]} = seed();
      return request()
        .get(`/v1/users/${user.id}`)
        .expect(200);
    });
  });

  context('UPDATE', function () {
    it('should update the name of a user', function () {
      const {users: [user]} = seed();
      return request()
        .put(`/v1/users/${user.id}`)
        .send({user: {name: 'update-name'}})
        .expect(200);
    });

    it('should update the role of a user', function () {
      const {users: [user]} = seed();
      return request()
        .put(`/v1/users/${user.id}`)
        .send({user: {role: 'user'}})
        .expect(200);
    });
  });
});
