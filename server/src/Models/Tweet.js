const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

const Tweet = mongoose.model('tweet', TweetSchema, 'TweetDB');

module.exports = Tweet;