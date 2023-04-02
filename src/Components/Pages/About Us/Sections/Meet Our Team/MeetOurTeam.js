import React from "react";
import "./MeetOurTeam.css";
import { Link } from "react-router-dom";

const MeetOurTeam = () => {
  return (
    <section
      id="meetourteam"
      style={{ backgroundColor: "darkred" }}
      className="MeetOurTeamContainer"
    >
      <br />
      <div style={{ color: "white" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "auto",
            color: "red",
            fontWeight: "bold",
          }}
        >
          Meet Our Team
        </h1>
        <div>
          <br />
          <p
            style={{
              textAlign: "center",
              margin: "auto",
              wordWrap: "break-word",
            }}
          >
            {" "}
            We are a team of experienced people nutrition. Sports and fitness
            passionate experts with talent <br /> and knowledge unsurpassed in
            the industry. Get to know us.{" "}
          </p>
          <br />
          <br />
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            width: "auto",
            height: "auto",
          }}
        >
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f28eabe0ae34d61da91bc80/ecec01fc-dd7d-4f47-888e-86f4cf2d80a0/Jen+.png"
              alt="Jane"
              style={{
                height: "auto",
                maxWidth: "100%",
                backgroundSize: "contain",
              }}
            />
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>Amitee Loiselle</h3>
            <p style={{ textAlign: "center" }}>Fitness Coach</p>
          </div>
          <div>
            <img
              src="https://rwjfitnesswellness.com/wp-content/uploads/2022/03/NBR-Sruta-Sanghvi-500x500-1.jpg"
              alt="Jane"
              style={{
                height: "auto",
                maxWidth: "100%",
                backgroundSize: "contain",
              }}
            />
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>Sruta Sanghvi</h3>
            <p style={{ textAlign: "center" }}>Crossfit Cach</p>
          </div>
          <div>
            <img
              src="https://mainlinehealthfitnessandwellness.com/wp-content/uploads/2022/07/GMI_MarkCorbin_500x500.jpg"
              alt="Jane"
              style={{
                height: "auto",
                maxWidth: "100%",
                backgroundSize: "contain",
              }}
            />
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>Mark Anthony</h3>
            <p style={{ textAlign: "center" }}>Crossfit Coach</p>
          </div>
          <div>
            <img
              src="https://rwjhamiltonwellness.com/wp-content/uploads/2021/03/HAM-PT-Dave_Stout-01-500x500-1.jpg"
              alt="Jane"
              style={{
                height: "auto",
                maxWidth: "100%",
                backgroundSize: "contain",
              }}
            />
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>Ron Richardson</h3>
            <p style={{ textAlign: "center" }}>Body Building</p>
          </div>
        </div>
        <br />
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/viewentireteam"
        >
          <button
            className="SeeTheWholeTeamButton"
            style={{ margin: "0 auto", display: "block", fontSize: "20px" }}
          >
            View Entire Team
          </button>
        </Link>

        <br />
        <br />
      </div>
    </section>
  );
};

export default MeetOurTeam;
