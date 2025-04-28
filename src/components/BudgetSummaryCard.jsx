import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./css/BudgetSummaryCard.css";

const BudgetSummaryCard = ({ budget, accommodationCost, transportationCost, onReset }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (onReset) {
      onReset();
    }
    navigate("/home"); 
  };

  const remainingBudget = parseInt(budget, 10) - accommodationCost - transportationCost;

  return (
    <div className="card budget-summary-card">
      <div className="card-header">
        <h3>Budget Summary</h3>
      </div>
      <div className="card-body budget-summary-details">
        <div className="budget-item">
          <span>Total Budget:</span>
          <span>{parseInt(budget, 10).toLocaleString()} SAR</span>
        </div>
        <div className="budget-item">
          <span>Accommodation:</span>
          <span>-{accommodationCost.toLocaleString()} SAR</span>
        </div>
        <div className="budget-item">
          <span>Transportation:</span>
          <span>-{transportationCost.toLocaleString()} SAR</span>
        </div>
        <div className="budget-item total">
          <span>Remaining Budget:</span>
          <span>{remainingBudget.toLocaleString()} SAR</span>
        </div>

        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Plan
        </button>
      </div>
    </div>
  );
};

export default BudgetSummaryCard;
