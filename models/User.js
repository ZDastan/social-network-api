const { Schema, model } = require('mongoose');
const toughtsSchema = require('./Thoughts');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
     unique:true,
     trim :true
    },
    email: {
      type: String,
      required: true,
      unique:true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    thoughts: [{
        type:Schema.Types.ObjectId,
        ref:'Thought',
    }],
    friends: [{
        type:Schema.Types.ObjectId,
        ref:'Friend',
    }],
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;