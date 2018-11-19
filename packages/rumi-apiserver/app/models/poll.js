const mongodb = require('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {refersTo}} = Schema;
const User = require('./user');
const Task = require('./task');

// use mongodb.Types to access mongoose.Types

const options = {

  // Support soft delete of the resource.
  softDelete: true,
};

const schema = new Schema({
  // add your schema definition here
  task: ref(Task, {required: true}),
  user: ref(User, {required: true}),
  reason: {type: String, default: "No reason given", required: false},
  vote: ref(User, {required: false})

}, options);

module.exports = mongodb.resource('poll', schema);
