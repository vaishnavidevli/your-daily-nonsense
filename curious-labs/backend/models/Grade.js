const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: String,
  question: String,
  description: String
});

const ChapterSchema = new mongoose.Schema({
  id: String,
  name: String,
  questions: [QuestionSchema]
});

const SubjectSchema = new mongoose.Schema({
  id: String,
  name: String,
  chapters: [ChapterSchema]
});

const GradeSchema = new mongoose.Schema({
  grade: Number,
  subjectsV2: [SubjectSchema]
});

module.exports = mongoose.model('Grade', GradeSchema);


