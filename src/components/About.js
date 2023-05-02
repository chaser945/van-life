import React from "react";

import vanImg from "../img/person-on-van.png";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="about-card">
        <img src={vanImg} alt="a person on van"></img>
        <div className="about-content">
          <h1 className="about-heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="about-p">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra{" "}
            <span role="img" aria-label="smiling-emoji">
              😉
            </span>
            )
          </p>

          <p className="about-p">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about-explore-card">
            <h2 className="explore-heading">
              Your destination is waiting.<br></br> Your van is ready.
            </h2>
            <button className="btn about-btn">Explore our vans</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
