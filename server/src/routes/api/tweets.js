const express = require('express');
const router = express.Router();
const Tweet = require('../../Models/Tweet');

router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find().sort('-date').limit(10);

    if (!tweets || tweets.length == 0) {
      return res.status(404).json({ error: "Oh dear...No tweets were found." });
    }

    return res.status(200).json(tweets);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }
});

router.get('/:user', async (req, res) => {
  try {
    const tweets = await Tweet.findOne({ user: req.params.user });

    if (!tweets) {
      return res.status(404).json({ error: "Oh dear...No tweets were found." });
    }

    return res.status(200).json(tweets);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }
})

router.post('/new', async (req, res) => {
  const { message, user } = req.body;

  if (!message || message.length == 0) {
    return res.status(400).json({ error: 'Please enter a valid message.' });
  }

  if (!user || user.length == 0) {
    return res.status(400).json({ error: 'Please enter a valid user.' });
  }

  let tweet = new Tweet({
    message,
    user,
  });

  try {
    await tweet.save();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong.' });
  }
});

module.exports = router;