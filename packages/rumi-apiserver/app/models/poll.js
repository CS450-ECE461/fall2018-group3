const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { refersTo }} = Schema;
const User = require ('./user');
const Task = require ('./task');

// use mongodb.Types to access mongoose.Types

const options = {

  // Support soft delete of the resource.
  softDelete: true,
};

const schema = new Schema ({
  // add your schema definition here
  task: ref(Task, {required: true}),
  users: [{
    user: ref(User, {required: true})
  }],
  reason: [{type: String, required: true}],
  vote: [{

  }]
}, options);

module.exports = mongodb.resource ('poll', schema);
