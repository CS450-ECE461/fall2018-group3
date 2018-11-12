const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { refersTo }} = Schema;
const Task = require ('./task');

// use mongodb.Types to access mongoose.Types

const options = {

  // Support soft delete of the resource.
  softDelete: true,
};

const schema = new Schema ({
  name: {type: String, required: true},
  role: {type: String, required: true, enum: ['admin', 'user']},
}, options);

module.exports = mongodb.resource ('user', schema);
