import React from "react";

import mountainVan from "../img/mountain-van.png";

import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mountainVan})` }}
        className="home-card"
      >
        <h1 className="home-h1">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home-p">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="btn home-btn">Find your van</button>
      </div>
    </>
  );
}
