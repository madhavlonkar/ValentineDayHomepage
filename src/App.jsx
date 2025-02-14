import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // External CSS for styling
import bgimg from "./assets/logos/bgimg.jpg";
import companyLogo from "./assets/logos/Container.png";

import heartOverflow from "./assets/logos/heartOverflow.jpg";
import buggyPirates from "./assets/logos/buggyPirates.jpeg";
import loveBug from "./assets/logos/lovebug.jpg";
import dreamlove from "./assets/logos/heart 1.png";
import saviour from "./assets/logos/saviour.jpg";

const teams = [
  {
    name: "Heart Overflow 💖",
    logo: heartOverflow,
    link: "https://finalgameofvalentine.vercel.app/",
  },
  {
    name: "Buggy Pirates 🏴‍☠️🐞",
    logo: buggyPirates,
    link: "https://drive.google.com/file/d/1O1Q7Rct8mi1DIPIrqBCzY4FtlKZNGO1G/view?usp=sharing",
  },
  {
    name: "Love Bug 🐞🪲",
    logo: loveBug,
    link: "https://drive.google.com/drive/folders/1PlbilrawxSmIyxu2N47tkn1UkJczn-3t?usp=sharing",
  },
  {
    name: "Love Life Savior💻❤️",
    logo: saviour,
    link: "https://drive.google.com/drive/folders/1_UkSW1DXxUhtGO8UU8-i7qpjmbnIFxX7?usp=sharing",
  },
  {
    name: "Dream Love💻❤️",
    logo: dreamlove,
    link: "https://drive.google.com/file/d/1vAj2zhXAgDx3hXZNbiJTej_wQziNMZyM/view?usp=sharing",
  },
];

const App = () => {
  return (
    <>
      {/* Background */}
      <div className="bg-light-pink min-vh-100">
        {/* Logo Section */}
        <div className="container-fluid px-5 py-5">
          <img
            src={companyLogo}
            alt="Valentine's Day"
            className="img-fluid heartbeat"
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Title Section */}
        <div className="container text-center py-5 fade-in">
          <h2 className="mb-5 fw-bold" style={{ color: "rgba(0, 0, 0, 0.8)" }}>
            Spreading Love Through Creativity:
            <br />
            <span className="text-pink">
              Our Valentine's Competition Showdown!
            </span>
          </h2>

          {/* Teams Section */}
          <div className="row justify-content-center">
            {teams.map((team, index) => (
              <div
                key={index}
                className="col-12 col-md-4 col-lg-3 mb-4"
                onClick={() => window.open(team.link, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="team-card shadow-lg border-0 rounded-4">
                  {/* Darkened Background Image */}
                  <div className="team-card-img">
                    <img src={bgimg} alt={team.name} className="card-img-top" />
                  </div>

                  {/* Overlapping Logo */}
                  <div className="team-logo-container">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="team-logo"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="card-body text-center">
                    <h4 className="card-title fw-bold text-dark">
                      {team.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Hearts */}
          <div className="floating-hearts-container">
            <span className="floating-hearts">❤️</span>
            <span className="floating-hearts">💖</span>
            <span className="floating-hearts">💕</span>
            <span className="floating-hearts">💘</span>
            <span className="floating-hearts">❣️</span>
          </div>

          {/* Feedback Button */}
          <a
            href="https://forms.office.com/r/esr1qDaY9q"
            className="btn btn-danger fw-bold mt-5 px-5 py-3 feedback-btn"
          >
            Send Your Feedback
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
