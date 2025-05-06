import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./css/UmrahPlan.css";

const YourPlan = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("yourPlan");
    if (saved) {
      setPlan(JSON.parse(saved));
    }
  }, []);

  if (!plan) {
    return <p style={{ textAlign: "center" }}>No saved plan found.</p>;
  }

  const { startDate, endDate, messages } = plan;
  const tripDuration = Math.round(
    (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="umrah-plan-container">
      <h2>Your Saved Umrah Plan</h2>
      <p>
        {tripDuration} days (
        {new Date(startDate).toDateString()} -{" "}
        {new Date(endDate).toDateString()})
      </p>

      <div className="ai-plan-output">
        <h3>Plan Details</h3>
        {messages?.map((msg, i) => (
          <div key={i} className="markdown-output">
            <ReactMarkdown>{msg}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPlan;
