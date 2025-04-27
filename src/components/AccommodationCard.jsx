import React from "react";
import "./css/AccommodationCard.css";

const AccommodationCard = ({ hotel, tripDuration }) => {
  const totalCost = hotel.costPerNight * tripDuration;

  return (
    <div className="card accommodation-card">
      <div className="card-header">
        <h3>Accommodation</h3>
      </div>
      <div className="card-body accommodation-grid">
        <div className="accommodation-image">
          <img src={hotel.image} alt={hotel.name} />
        </div>
        <div className="accommodation-details">
          <h4>{hotel.name}</h4>
          <p>{hotel.description}</p>
          <ul>
            {hotel.amenities.map((amenity, idx) => (
              <li key={idx}>• {amenity}</li>
            ))}
          </ul>
          <div className="accommodation-price">
            <span>{hotel.costPerNight.toLocaleString()} SAR/night</span>
            <strong>Total: {totalCost.toLocaleString()} SAR</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
