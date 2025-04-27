import React from "react";
import AccommodationCard from "./AccommodationCard";
import TransportationCard from "./TransportationCard";
import ItineraryCard from "./ItineraryCard";
import HistoricalSitesCard from "./HistoricalSitesCard";
import BudgetSummaryCard from "./BudgetSummaryCard";
import "./css/UmrahPlan.css";

const UmrahPlan = ({
  startDate,
  endDate,
  budget,
  transportation,
  origin,
  includeHistorical,
  onReset,
}) => {
  const tripDuration = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  const budgetNum = parseInt(budget, 10);

  const hotel = budgetNum > 20000 ? {
    name: "Makkah Clock Royal Tower",
    description: "Luxury 5-star hotel with a prime location in front of Masjid Al Haram",
    image: "https://images.unsplash.com/photo-1630501618487-68da84a4bcbc",
    amenities: ["Free WiFi", "24-hour room service", "Spa", "Multiple restaurants", "Direct Haram view"],
    costPerNight: 1500,
  } : budgetNum > 10000 ? {
    name: "Hilton Makkah Convention Hotel",
    description: "4-star hotel with excellent service within walking distance to Haram",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: ["Free WiFi", "Breakfast buffet", "Prayer area", "Shuttle to Haram"],
    costPerNight: 900,
  } : budgetNum > 5000 ? {
    name: "Dar Al Eiman Royal Hotel",
    description: "3-star hotel, 10-15 minute walk to Masjid Al Haram",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    amenities: ["Free WiFi", "Breakfast", "Room service"],
    costPerNight: 500,
  } : {
    name: "Al Tawfiq Plaza Hotel",
    description: "Budget-friendly hotel, short bus ride to Masjid Al Haram",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
    amenities: ["Free WiFi", "Air conditioning", "24-hour reception"],
    costPerNight: 300,
  };

  const accommodationCost = hotel.costPerNight * tripDuration;

  const transportationDetails = transportation === "plane" ? {
    type: "Flight",
    provider: budgetNum > 10000 ? "Saudi Arabian Airlines" : "Turkish Airlines",
    details: `Round-trip flights from ${origin} to Jeddah Airport (JED)`,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    departureDate: new Date(startDate).toDateString(),
    returnDate: new Date(endDate).toDateString(),
    cost: budgetNum > 10000 ? 3500 : 2200,
  } : {
    type: "Car",
    provider: "Self-driving",
    details: `Road trip from ${origin} to Makkah`,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
    departureDate: new Date(startDate).toDateString(),
    returnDate: new Date(endDate).toDateString(),
    cost: tripDuration * 100,
  };

  const historicalSites = includeHistorical === "yes" ? [
    {
      name: "Jabal al-Nour",
      description: "Site of the first revelation",
      image: "https://images.unsplash.com/photo-1590077104072-792194d1ca33",
    },
    {
      name: "Jabal Thawr",
      description: "Cave refuge during migration to Madinah",
      image: "https://images.unsplash.com/photo-1518228684890-bef1380539b0",
    },
  ] : [];

  return (
    <div className="umrah-plan-container">
      <h2>Your Umrah Plan</h2>
      <p>{tripDuration} days ({new Date(startDate).toDateString()} - {new Date(endDate).toDateString()})</p>

      <AccommodationCard hotel={hotel} tripDuration={tripDuration} />
      <TransportationCard transportation={transportationDetails} />
      <ItineraryCard tripDuration={tripDuration} hotelName={hotel.name} />
      {includeHistorical === "yes" && <HistoricalSitesCard sites={historicalSites} />}
      <BudgetSummaryCard
        budget={budget}
        accommodationCost={accommodationCost}
        transportationCost={transportationDetails.cost}
        onReset={onReset}
      />
    </div>
  );
};

export default UmrahPlan;
