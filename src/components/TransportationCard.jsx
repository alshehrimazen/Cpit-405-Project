import React from "react";
import "./css/TransportationCard.css";

const TransportationCard = ({ transportation }) => {
  return (
    <div className="card transportation-card">
      <div className="card-header">
        <h3>Transportation</h3>
      </div>
      <div className="card-body transportation-grid">
        <div className="transportation-image">
          <img src={transportation.image} alt={transportation.type} />
        </div>
        <div className="transportation-details">
          <h4>{transportation.provider}</h4>
          <p>{transportation.details}</p>
          <div className="transportation-dates">
            <div>
              <strong>Departure:</strong> {transportation.departureDate}
            </div>
            <div>
              <strong>Return:</strong> {transportation.returnDate}
            </div>
          </div>
          <div className="transportation-price">
            <strong>Total: {transportation.cost.toLocaleString()} SAR</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationCard;
