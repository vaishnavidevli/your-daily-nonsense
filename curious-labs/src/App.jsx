// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AskLoopyPage from "./pages/AskLoopyPage";
// import ExplorePage from "./pages/ExplorePage";
// import AboutPage from "./pages/AboutPage";
// import GradePage from "./pages/GradePage";


// import "./App.css";


// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const snowContainer = document.getElementById("snow-container");

//     function createSnowflake() {
//       const snowflake = document.createElement("div");
//       snowflake.classList.add("snowflake");
//       snowflake.textContent = "❄";
//       snowflake.style.left = Math.random() * 100 + "vw";
//       snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
//       snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
//       snowflake.style.opacity = Math.random();
//       snowContainer.appendChild(snowflake);

//       setTimeout(() => snowflake.remove(), 10000);
//     }

//     const interval = setInterval(createSnowflake, 200);
//     return () => clearInterval(interval); // clean up on unmount
//   }, []);

//   return (
//     <>
//       <div id="snow-container"></div>
//       <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<AskLoopyPage />} />
//           <Route path="/explore" element={<ExplorePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/grade/:grade" element={<GradePage />} /> 
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AskLoopyPage from "./pages/AskLoopyPage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import GradePage from "./pages/GradePage";
import QuestionPage from "./pages/QuestionPage"; // <-- NEW

import "./App.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const snowContainer = document.getElementById("snow-container");

    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.textContent = "❄";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
      snowflake.style.opacity = Math.random();
      snowContainer.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), 10000);
    }

    const interval = setInterval(createSnowflake, 200);
    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <>
      <div id="snow-container"></div>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<AskLoopyPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/grade/:grade" element={<GradePage />} />
            <Route
              path="/class/:grade/:subject/:chapter/:questionId"
              element={<QuestionPage />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
