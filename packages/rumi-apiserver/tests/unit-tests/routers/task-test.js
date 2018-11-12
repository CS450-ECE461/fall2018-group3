const {request} = require('@onehilltech/blueprint-testing');
const {seed} = require('@onehilltech/blueprint-mongodb');

describe('app | routers | task', function () {
  context('GET', function () {
    it('should get all tasks', function () {
      return request()
        .get('/v1/tasks')
        .expect(200);
    });

    it('should get all tasks assigned to a user', function () {
      const {users: [,user]} = seed();
      return request()
        .get(`/v1/tasks?assignee=${user.id}`)
        .expect(200);
    });
  });

  context('POST', function () {
    it('should create a task', function () {
      const {users: [user]} = seed();
      const task = {
        title: 'test-title',
        description: 'test-desc',
        date_assigned: Date(),
        date_due: Date(),
        creator: user._id,
        assignee: user._id,
        status: 'not-started'
      };
      return request()
        .post('/v1/tasks')
        .send({task})
        .expect(200);
    });

    it('should create a task with a default due date', function () {
      const {users: [user]} = seed();
      const task = {
        title: 'test-title',
        description: 'test-desc',
        date_assigned: Date(),
        creator: user._id,
        assignee: user._id,
        status: 'not-started'
      };
      return request()
        .post('/v1/tasks')
        .send({task})
        .expect(200);
    });

    it('should not create a task without a creator',  function () {
      const {users: [user]} = seed();
      const task = {
        title: 'test-title',
        description: 'test-desc',
        date_assigned: Date(),
        date_due: Date(), assignee: user._id,
        status: 'not-started'
      };
      return request()
        .post('/v1/tasks')
        .send({task})
        .expect(400);
    });
  });

  context('UPDATE', function () {
    it('should update a task title', function () {
      const {tasks: [task]} = seed();
      return request()
        .put(`/v1/tasks/${task.id}`)
        .send({description: 'this is a new description'})
        .expect(200);
    });

    it('should update a task assignee', function () {
      const {users: [,,user]} = seed();
      const {tasks: [task]} = seed();
      return request()
        .put(`/v1/tasks/${task.id}`)
        .send({assignee: user._id})
        .expect(200);
    });

    it('should update a task date due', function () {
      const {tasks: [task]} = seed();
      const newdate = {date_due: Date('December 21, 2018 12:00:00')};
      return request()
        .put(`/v1/tasks/${task.id}`)
        .send({newdate})
        .expect(200);
    });
  });

  context('DELETE', function () {
    it('should delete a task', function () {
      const {tasks: [task]} = seed();
      return request()
        .delete(`/v1/tasks/${task._id}`)
        .expect(200)
    });
  });
});