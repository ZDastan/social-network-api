const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');
module.exports = {
    async getThoughts(req, res) {
        try {
          const thoughts = await Thoughts.find();
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async getSingleThought(req, res) {
        try {
          const thought = await Thoughts.findOne({ _id: req.params.thoughtId })
            .select('-__v');
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async createThought(req, res) {
        try {
          const thought = await Thoughts.create(req.body);
          res.json(thought);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },

      async updateThought(req, res) {
        try {
          const thought = await Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async deleteThought(req, res) {
        try {
          const thought = await Thoughts.findOneAndDelete({ _id: req.params.thoughtId });
    
          if (!thought) {
            res.status(404).json({ message: 'No thought with that ID' });
          }
    
          await User.findOneAndUpdate(
            {thoughts:req.params.thoughtId},
            {$pull:{thoughts:req.params.thoughtId}},
            {new:true}
          );
          res.json({ message: 'User and thoughts deleted!' });
        } catch (err) {
          res.status(500).json(err);
        }
      },
}