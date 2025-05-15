const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Models
const questionSchema = new mongoose.Schema({
  id: String,
  question: String,
  description: String,
});

const chapterSchema = new mongoose.Schema({
  id: String,
  name: String,
  questions: [questionSchema],
});

const subjectSchema = new mongoose.Schema({
  id: String,
  name: String,
  chapters: [chapterSchema],
});

const gradeSchema = new mongoose.Schema({
  grade: Number,
  subjectsV2: [subjectSchema],
});

const Grade = mongoose.model('Grade', gradeSchema);

// Routes

// Get class data by grade
app.get('/api/class/:grade', async (req, res) => {
  const { grade } = req.params;
  try {
    const classData = await Grade.findOne({ grade });
    if (classData) {
      res.json(classData);
    } else {
      res.status(404).json({ message: 'Class not found' });
    }
  } catch (err) {
    console.error('Error fetching class data:', err);
    res.status(500).json({ message: 'Error fetching class data', error: err.message });
  }
});

// Get specific question
app.get('/api/class/:grade/:subjectId/:chapterId/:questionId', async (req, res) => {
  const { grade, subjectId, chapterId, questionId } = req.params;
  try {
    const classData = await Grade.findOne({ grade });
    const subject = classData?.subjectsV2.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);
    const question = chapter?.questions.find((q) => q.id === questionId);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question);
  } catch (err) {
    console.error('Error fetching question:', err);
    res.status(500).json({ message: 'Error fetching question', error: err.message });
  }
});

// Add new question to specific chapter
app.post(
  '/api/class/:grade/:subjectId/:chapterId',
  [
    body('question').isString().notEmpty().withMessage('Question must be a non-empty string'),
    body('description').isString().withMessage('Description must be a string'),
  ],
  async (req, res) => {
    const { grade, subjectId, chapterId } = req.params;
    const { question, description } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const classData = await Grade.findOne({ grade });
      const subject = classData?.subjectsV2.find((s) => s.id === subjectId);
      const chapter = subject?.chapters.find((c) => c.id === chapterId);

      if (!classData || !subject || !chapter) {
        return res.status(404).json({ message: 'Class, subject, or chapter not found' });
      }

      const newQuestion = {
        id: new mongoose.Types.ObjectId().toString(),
        question,
        description,
      };

      chapter.questions.push(newQuestion);
      await classData.save();

      res.status(201).json({ message: 'Question added successfully', question: newQuestion });
    } catch (err) {
      console.error('Error adding question:', err);
      res.status(500).json({ message: 'Error adding question', error: err.message });
    }
  }
);

// Get all available grades
app.get('/api/grades', async (req, res) => {
  try {
    const grades = await Grade.find();
    if (grades.length > 0) {
      res.json(grades);
    } else {
      res.status(404).json({ message: 'No grades found' });
    }
  } catch (err) {
    console.error('Error fetching grades:', err);
    res.status(500).json({ message: 'Error fetching grades', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


