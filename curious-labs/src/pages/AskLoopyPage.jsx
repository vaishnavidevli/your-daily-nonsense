import RandomQuestion from "../components/RandomQuestion";
import GradeSelection from "../components/GradeSelection";
import DrLoopy from "../components/DrLoopy";

const AskLoopyPage = () => {
  return (
    <main className="main">
      <div className="left-column">
        <RandomQuestion />
        <GradeSelection />
      </div>
      <DrLoopy />
    </main>
  );
};

export default AskLoopyPage;