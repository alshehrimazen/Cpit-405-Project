
import React, { useState } from "react";
import "./css/UmrahGuide.css";
import makkahImg from "../assets/Makkah.jpg";
import saeeImg from "../assets/sa'ee.jpg";
import tawafImg from "../assets/tawaf.jpg";
import trimImg from "../assets/trim.jpg";



const UmrahGuide = () => {
  const [activeStep, setActiveStep] = useState("ihram");

  const umrahStepsData = {
    ihram: {
      title: "Step 1: Ihram - The State of Purity",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      imageAlt: "Person in Ihram clothing",
      instructions: {
        title: "How to enter Ihram:",
        steps: [
          "Perform ghusl (full body washing)",
          "Make the niyyah (intention) for Umrah",
          "Recite the Talbiyah:"
        ]
      },
      note: "You must enter Ihram before passing the Miqat (designated boundary point).",
      dua: {
        arabic: "Labbayk Allahumma labbayk. Labbayk la sharika laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk. La sharika lak.",
      }
    },
    makkah: {
      title: "Step 2: Entering Makkah",
      image: makkahImg,
      imageAlt: "Approaching Masjid Al-Haram",
      instructions: {
        title: "Upon entering Makkah:",
        steps: [
          "Continue reciting the Talbiyah",
          "Enter Masjid al-Haram with your right foot",
          "Recite the dua for entering the mosque",
          "Approach the Kaaba with humility and reverence"
        ]
      },
      note: "When you first see the Kaaba, make any dua (supplication) as this is a time when prayers are answered."
    },
    tawaf: {
      title: "Step 3: Tawaf - Circumambulation",
      image: tawafImg,
      imageAlt: "Tawaf around the Kaaba",
      instructions: {
        title: "Performing Tawaf:",
        steps: [
          "Start at Hajar al-Aswad (Black Stone)",
          "Walk counter-clockwise around the Kaaba seven times",
          "For men: Expose right shoulder during first three rounds (Idtiba')",
          "Make dua during each circuit",
          "After completing seven circuits, cover both shoulders",
          "Proceed to Maqam Ibrahim and pray",
          "Drink Zamzam water"
        ]
      },
      note: "If you can't touch the Black Stone due to crowds, simply point at it and say \"Allahu Akbar\" as you pass."
    },
    saee: {
      title: "Step 4: Sa'ee - Walking between Safa and Marwah",
      image: saeeImg,
      imageAlt: "Sa'ee between Safa and Marwah",
      instructions: {
        title: "Performing Sa'ee:",
        steps: [
          "Begin at Safa mount",
          "Face the Kaaba and make dua",
          "Walk to Marwah at a normal pace",
          "Men should jog lightly in the marked green light area",
          "Upon reaching Marwah, face the Kaaba and make dua",
          "Return to Safa (counting as the second trip)",
          "Complete seven trips, ending at Marwah",
          "Make dua and recite Quran during the walks"
        ]
      },
      note: "The Sa'ee commemorates Hajar's (mother of Ismail) search for water for her infant son."
    },
    shaving: {
      title: "Step 5: Halq or Taqsir - Shaving or Trimming Hair",
      image: trimImg,
      imageAlt: "Shaving or trimming hair",
      instructions: {
        title: "Completing Umrah:",
        steps: [
          "For men: Either shave the entire head (preferred) or trim hair evenly",
          "For women: Cut a fingertip length of hair",
          "After this step, the restrictions of Ihram end",
          "Regular clothing can be worn",
          "Normal activities can be resumed"
        ]
      },
      note: "The ritual of hair cutting symbolizes humility and submission to Allah.",
    }
  };

  const handleTabClick = (step) => {
    setActiveStep(step);
  };

  const UmrahIntroSection = () => (
    <div className="umrah-intro-section">
      <div className="intro-header">
        <h1>Umrah Guide: Step by Step</h1>
        <p>A comprehensive guide to performing Umrah rituals correctly</p>
      </div>

      <div className="what-is-umrah">
        <h2>What is Umrah?</h2>
        <p>
          Umrah is a voluntary pilgrimage to the Holy Kaaba in Makkah that can be performed at any time of the year. It consists of a series of rituals that symbolize the faith and devotion of Muslims to Allah.
        </p>
      </div>
      
      <div className="video-guide">
        <h2>Learn Umrah with Video Guide</h2>
        <div className="video-container">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/qZ9n4V9lZkE" 
            title="Umrah Guide Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );

  const UmrahStepItem = ({ data, isFinal }) => {
    const { title, image, imageAlt, instructions, note, dua } = data;
    
    return (
      <div className="step-card">
        <div className="step-heading">
          <span className="step-icon">📍</span>
          <h3>{title}</h3>
        </div>
        <div className="step-details">
          <div className="step-image">
            <img src={image} alt={imageAlt} />
          </div>
          <div className="step-instructions">
            <h4>{instructions.title}</h4>
            <ol>
              {instructions.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            {dua && (
              <>
                <div className="dua-text">{dua.arabic}</div>
                <div className="dua-translation">{dua.translation}</div>
              </>
            )}
            {note && (
              <div className="important-note">
                <span className="note-icon">📖</span>
                <p>{note}</p>
              </div>
            )}
            {isFinal && (
              <div className="final-note">
                <h4>Congratulations! Your Umrah is now complete.</h4>
                <p>May Allah accept your Umrah and reward you for your devotion.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="umrah-guide">
      <UmrahIntroSection />
      
      <div className="umrah-steps-container">
        <h2>Umrah Steps</h2>
        
        <div className="umrah-tabs">
          <div className="tabs-list">
            <button 
              className={`tab-item ${activeStep === "ihram" ? "active" : ""}`} 
              onClick={() => handleTabClick("ihram")}
            >
              <span className="tab-number">1</span>
              <span className="tab-text">Ihram</span>
            </button>
            <button 
              className={`tab-item ${activeStep === "makkah" ? "active" : ""}`} 
              onClick={() => handleTabClick("makkah")}
            >
              <span className="tab-number">2</span>
              <span className="tab-text">Enter Makkah</span>
            </button>
            <button 
              className={`tab-item ${activeStep === "tawaf" ? "active" : ""}`} 
              onClick={() => handleTabClick("tawaf")}
            >
              <span className="tab-number">3</span>
              <span className="tab-text">Tawaf</span>
            </button>
            <button 
              className={`tab-item ${activeStep === "saee" ? "active" : ""}`} 
              onClick={() => handleTabClick("saee")}
            >
              <span className="tab-number">4</span>
              <span className="tab-text">Sa'ee</span>
            </button>
            <button 
              className={`tab-item ${activeStep === "shaving" ? "active" : ""}`} 
              onClick={() => handleTabClick("shaving")}
            >
              <span className="tab-number">5</span>
              <span className="tab-text">Shaving</span>
            </button>
          </div>

          <div className="step-content">
            <UmrahStepItem 
              data={umrahStepsData[activeStep]} 
              isFinal={activeStep === "shaving"} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahGuide;