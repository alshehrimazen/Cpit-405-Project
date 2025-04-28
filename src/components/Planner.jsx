import React, { useState } from "react";
import UmrahPlan from "./UmrahPlan";
import "./css/Planner.css";

const Planner = () => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [transportation, setTransportation] = useState("plane");
  const [origin, setOrigin] = useState("");
  const [includeHistorical, setIncludeHistorical] = useState("no");
  const [planGenerated, setPlanGenerated] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!startDate || !endDate) {
        alert("Please fill in both Start Date and End Date before continuing.");
        return;
      }
    }
    if (step === 2) {
      if (!budget || !transportation) {
        alert("Please fill in Budget and select Transportation before continuing.");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!origin) {
      alert("Please enter your Origin before generating the plan.");
      return;
    }
    setPlanGenerated(true);
  };

  const resetForm = () => {
    setPlanGenerated(false);
    setStep(1);
  };

  if (planGenerated) {
    return (
      <UmrahPlan
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        budget={budget}
        transportation={transportation}
        origin={origin}
        includeHistorical={includeHistorical}
        onReset={resetForm}
      />
    );
  }

  return (
    <div className="planner-page">
      <h2>Create Your Umrah Journey</h2>
      <p>Fill in the details below to get your personalized plan</p>

      <form className="planner-form" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h3>Plan Your Umrah Journey</h3>
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
            <button type="button" onClick={handleNext}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Transportation & Budget</h3>
            <label>Transportation</label>
            <select
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
              required
            >
              <option value="plane">Plane</option>
              <option value="car">Car</option>
            </select>
            <label>Budget (in SAR)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              min="1"
            />
            <div className="planner-buttons">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Additional Details</h3>
            <label>Where are you traveling from?</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
            <label>Include Historical Sites?</label>
            <select
              value={includeHistorical}
              onChange={(e) => setIncludeHistorical(e.target.value)}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="planner-buttons">
              <button type="button" onClick={handleBack}>Back</button>
              <button type="submit">Generate Plan</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Planner;
