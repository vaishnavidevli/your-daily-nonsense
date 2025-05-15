import "./RandomQuestion.css";

const RandomQuestion = () => {
    return (
      <section className="random-question">
        <h2>Ask a Random Question</h2>
        <button className="random-btn">Hit me with something random!</button>
        <div className="question-box">
          <div className="lightning-icon">⚡📱</div>
          <p>Can I charge my phone with lightning?</p>
        </div>
      </section>
    );
  };
  
  export default RandomQuestion;