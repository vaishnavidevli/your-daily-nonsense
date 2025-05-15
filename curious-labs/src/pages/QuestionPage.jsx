import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './QuestionPage.css'; // Create this CSS file for styling

function QuestionPage() {
  const { grade, subject, chapter, questionId } = useParams();
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/class/${grade}/${subject}/${chapter}/${questionId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestionData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching question:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [grade, subject, chapter, questionId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!questionData) return <div className="no-data">Question not found.</div>;

  return (
    <div className="question-page">
      <h2>{questionData.question}</h2>
      <p className="description">{questionData.description}</p>
      <div className="meta">
        <strong>Grade:</strong> {grade} | <strong>Subject:</strong> {subject} | <strong>Chapter:</strong> {chapter}
      </div>
    </div>
  );
}

export default QuestionPage;
