import React from "react";
import ReactPlayer from "react-player";
import "./AboutUs.css";

const AboutUs = () => {
  const showAlert = () => {
    alert("You clicked a button!");
  };
  return (
    <>
      <section
        id="aboutus"
        style={{ backgroundColor: "darkred" }}
        className="AboutUsContainer"
      >
        <div className="AboutUsYouTubeLink">
          <ReactPlayer controls url={"https://youtu.be/jfobiCq0YUc"} />
        </div>
        <div className="AboutUsContent">
          <h1
            className="AboutUsHeading"
            style={{ color: "red", fontWeight: "bold" }}
          >
            About Us
          </h1>
          <br />
          <p style={{ color: "white" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <br />
          <button onClick={showAlert} className="AboutUsButton">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
