import React from "react";
import "./css/HistoricalSitesCard.css";

const HistoricalSitesCard = ({ sites }) => {
  if (sites.length === 0) return null;

  return (
    <div className="card historical-sites-card">
      <div className="card-header">
        <h3>Historical Sites to Visit</h3>
      </div>
      <div className="card-body historical-sites-grid">
        {sites.map((site, index) => (
          <div key={index} className="historical-site-card">
            <img src={site.image} alt={site.name} />
            <div className="historical-site-info">
              <h4>{site.name}</h4>
              <p>{site.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalSitesCard;
