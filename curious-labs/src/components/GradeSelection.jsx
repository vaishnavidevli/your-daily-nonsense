import { useState } from "react";
import "./GradeSelection.css";
import { useNavigate } from "react-router-dom"; 


const GradeSelection = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleExploreClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <section className="grade-selection separate">
      <h3>Choose your Grade</h3>
      <div className="grades">
        <button>Class 6</button>
        <button>Class 7</button>
        <button>Class 8</button>
        <span className="explore" onClick={handleExploreClick}>
          🤯 explore the madness
        </span>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="popup-header">
            <div className="gloopy-icon" aria-hidden="true"></div>
              <h4>Pick a Grade</h4>
              <button className="close-btn" onClick={handleClose}>[x]</button>
            </div>
            <div className="popup-content">
              {/* {[6, 7, 8, 9, 10, 11, 12].map((num) => (
                <button key={num} className="grade-btn">Class {num}</button>
              ))} */}

{[6, 7, 8, 9, 10, 11, 12].map((num) => (
  <button 
    key={num} 
    className="grade-btn" 
    onClick={() => {
      navigate(`/grade/${num}`); // navigate to /grade/8, /grade/9, etc.
      setShowPopup(false); // close popup after clicking
    }}
  >
    Class {num}
  </button>
))}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GradeSelection;

{[6, 7, 8, 9, 10, 11, 12].map((num) => (
  <button 
    key={num} 
    className="grade-btn" 
    onClick={() => {
      navigate(`/grade/${num}`); // navigate to /grade/8, /grade/9, etc.
      setShowPopup(false); // close popup after clicking
    }}
  >
    Class {num}
  </button>
))}
