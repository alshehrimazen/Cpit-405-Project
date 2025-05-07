import React from "react";
import ReactMarkdown from "react-markdown";
import "./css/UmrahPlan.css";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const tripDuration = Math.round(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  );

  const handleConfirm = async () => {
    // if (!currentUser) {
    //   alert("❌ You must be logged in to confirm the plan.");
    //   navigate("/login");
    //   return;
    // }

    const planData = {
      startDate,
      endDate,
      budget,
      transportation,
      origin,
      includeHistorical,
      messages: ollamaMessages,
      confirmedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem("yourPlan", JSON.stringify(planData));
      alert("✅ Plan saved!");
      navigate("/yourplan");
    } catch (err) {
      console.error("❌ Failed to save:", err);
      alert("Error saving the plan.");
    }
  };

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
        {ollamaMessages?.length > 0 && ollamaMessages[0].trim() !== "" ? (
          ollamaMessages.map((msg, index) => (
            <div key={index} className="markdown-output">
              <ReactMarkdown >{msg}</ReactMarkdown>
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>
            ⚠️ No content generated. Please try again.
          </p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={onReset}>Plan Again</button>
        <button onClick={handleConfirm}>Confirm Plan</button>
      </div>
    </div>
  );
};

export default UmrahPlan;
