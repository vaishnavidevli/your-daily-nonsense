import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './GradePage.css';

const GradePage = () => {
  const { grade } = useParams();
  const [gradeData, setGradeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [expandedChapters, setExpandedChapters] = useState({});

  useEffect(() => {
    const fetchGradeData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/class/${grade}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGradeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching grade data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGradeData();
  }, [grade]);

  const toggleSubject = (subjectId) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }));
  };

  const toggleChapter = (subjectId, chapterId) => {
    const key = `${subjectId}-${chapterId}`;
    setExpandedChapters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!gradeData || !gradeData.subjectsV2 || gradeData.subjectsV2.length === 0) {
    return <div className="no-data">No subjects found for this grade.</div>;
  }

  return (
    <div className="grade-page">
      <h2 className="page-title">Class {grade} Subjects</h2>

      <div className="subject-buttons-container">
        {gradeData.subjectsV2.map((subject) => (
          <button
            key={subject.id}
            className={`subject-button ${expandedSubjects[subject.id] ? 'active' : ''}`}
            onClick={() => toggleSubject(subject.id)}
          >
            {subject.name} {expandedSubjects[subject.id] ? '▼' : '►'}
          </button>
        ))}
      </div>

      {gradeData.subjectsV2.map((subject) =>
        expandedSubjects[subject.id] ? (
          <div key={subject.id} className="chapters-container">
            {subject.chapters.map((chapter) => (
              <div key={chapter.id} className="chapter-item">
                <div
                  className="chapter-header"
                  onClick={() => toggleChapter(subject.id, chapter.id)}
                >
                  <span className="chapter-name">{chapter.name}</span>
                  <span className="expand-icon">
                    {expandedChapters[`${subject.id}-${chapter.id}`] ? '▼' : '►'}
                  </span>
                </div>

                {expandedChapters[`${subject.id}-${chapter.id}`] && (
                  <div className="questions-list">
                    {chapter.questions.length > 0 ? (
                      chapter.questions.map((q) => (
                        <Link
                          key={q.id}
                          to={`/class/${grade}/${subject.id}/${chapter.id}/${q.id}`}
                          className="question-link"
                        >
                          {q.question}
                        </Link>
                      ))
                    ) : (
                      <div className="no-questions">No questions available.</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default GradePage;
