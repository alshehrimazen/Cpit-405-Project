import React from "react";
import "./css/ItineraryCard.css";

const ItineraryCard = ({ tripDuration, hotelName }) => {
  return (
    <div className="card itinerary-card">
      <div className="card-header">
        <h3>Recommended Itinerary</h3>
      </div>
      <div className="card-body itinerary-steps">
        <div className="itinerary-step">
          <h4>Day 1: Arrival and Preparation</h4>
          <p>Check-in to {hotelName}, rest, and prepare for Umrah.</p>
        </div>
        <div className="itinerary-step">
          <h4>Day 2-{tripDuration - 1}: Umrah and Prayers</h4>
          <p>Perform Umrah, attend prayers at Masjid al-Haram, and explore the area.</p>
        </div>
        <div className="itinerary-step">
          <h4>Day {tripDuration}: Departure</h4>
          <p>Final prayers, check-out from {hotelName}, and departure.</p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
