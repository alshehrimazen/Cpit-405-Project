import React from "react";
import ReactMarkdown from "react-markdown";
import "./css/UmrahPlan.css";

const UmrahPlan = ({
  startDate,
  endDate,
  budget,
  transportation,
  origin,
  includeHistorical,
  onReset,
  ollamaMessages,
}) => {
  const tripDuration = Math.round(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  );

  console.log("🔍 ollamaMessages:", ollamaMessages);

  return (
    <div className="umrah-plan-container">
      <h2>Your AI-Generated Umrah Plan</h2>
      <p>
        {tripDuration} days (
        {new Date(startDate).toDateString()} -{" "}
        {new Date(endDate).toDateString()})
      </p>

      <div className="ai-plan-output">
        <h3>Plan Details from Ollama</h3>

        {ollamaMessages &&
          ollamaMessages.length > 0 &&
          ollamaMessages[0].trim() !== "" ? (
          ollamaMessages.map((msg, index) => (
            <div key={index} className="markdown-output">
              <ReactMarkdown>{msg}</ReactMarkdown>
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>
            ⚠️ No content generated. Please try again.
          </p>
        )}
      </div>

      <button onClick={onReset} style={{ marginTop: "2rem" }}>
        Plan Again
      </button>
    </div>
  );
};

export default UmrahPlan;
