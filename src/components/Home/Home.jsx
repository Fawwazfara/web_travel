import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">bade kamarana iye ulin atuh</h1>

          <p className="subtitle">
            yeh loba yeh tempat ulin hayang kamana bebas pilih pokonamah bade
            milarian wisata sae oge bolee
          </p>

          <button className="btn">
            <a href="#">pilari ayeuna</a>
          </button>
        </div>
        <div className="homeCard grid">
          <div className="localionDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder="11/meters/" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="$400 - $500" />
          </div>
          <button className="btn">
            search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
