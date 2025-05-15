const mongoose = require('mongoose');

// Define the schema for Question
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true, // Grade level of the question (e.g., 'Class 6')
  },
  subject: {
    type: String,
    required: true, // Subject of the question (Physics, Chemistry, etc.)
  },
  dateAdded: {
    type: Date,
    default: Date.now, // When the question was added
  },
});

// Create a model based on the schema
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
