import React from "react";
import "./ContactUs.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactUs = () => {
  return (
    <section id="contactus">
      <div className="FooterContainer" style={{ backgroundColor: "black" }}>
        <div className="GymContent">
          <h2 className="GymHeading">GYM</h2>
          <p>
            Seuasi ara voluptas sit assdfg thst ts hpernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Lorem ipsum.
          </p>
          <div>
            <a
              style={{ textDecoration: "none", color: "red" }}
              href="https://www.facebook.com/"
            >
              <FacebookIcon />
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "red",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              href="https://www.instagram.com/"
            >
              <InstagramIcon />
            </a>
            <a
              style={{ textDecoration: "none", color: "red" }}
              href="https://twitter.com/"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="HealthyLivingContent">
          <h3 className="HealthyLivingHeading">Healthy Living</h3>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
        </div>
        <div className="ServiceContent">
          <h3 className="ServiceHeading">Services Provided</h3>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
        </div>
        <div className="ProgrammersContent">
          <h3 className="ProgrammersHeading">Programmers</h3>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
          <p>Lorem ipsum dolores</p>
        </div>
      </div>
      <p className="FooterSign">
        &copy; 2023 Sushant Exports. All Rights Reserved.
      </p>
    </section>
  );
};
export default ContactUs;
