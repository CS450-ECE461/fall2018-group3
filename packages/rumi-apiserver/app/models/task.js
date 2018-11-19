const mongodb = require('@onehilltech/blueprint-mongodb');
const {Schema} = mongodb;
const {Types: {refersTo, ref}} = Schema;
const User = require('./user');

// use mongodb.Types to access mongoose.Types

const options = {

  // Support soft delete of the resource.
  softDelete: true,
};

const schema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: false},
  date_assigned: {type: Date, default: Date.now(), required: true},
  date_due: {type: Date, default: Date.now(), required: true},
  creator: ref(User, {required: true}),
  assignee: ref(User, {required: true}),
  status: {type: String, required: true, enum: ['not-started', 'in-progress', 'complete']}
}, options);

module.exports = mongodb.resource('task', schema);
