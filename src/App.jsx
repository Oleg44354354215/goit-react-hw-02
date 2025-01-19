import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import "./App.css";

function App() {
  const [voteData, setVoteData] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const saveDate = JSON.parse(localStorage.getItem("vote"));

    if (saveDate) {
      setVoteData(saveDate);
    }
  }, []);

  const updateFeedback = (feedbackType) => {
    setVoteData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("vote", JSON.stringify(voteData));
  }, [voteData]);

  const clearFeedback = () => {
    setVoteData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = voteData.good + voteData.neutral + voteData.bad;
  let positive = 0;
  if (totalFeedback !== 0) {
    positive = Math.round((voteData.good / totalFeedback) * 100);
  }
  return (
    <div>
      <Description />
      <Options
        voteData={voteData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        clearFeedback={clearFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback !== 0 && (
        <Feedback
          voteData={voteData}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}
export default App;
