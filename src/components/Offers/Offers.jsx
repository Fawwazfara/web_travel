import React from "react";
import "./offers.css";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import img8 from "../../assets/villa3.jpg";
import img9 from "../../assets/villa1.jpg";
import img10 from "../../assets/villa1.jpg";

const Data = [
  {
    id: 1,
    imgsrc: img8,
    destTitle: "taj mahal",
    location: "india",
    price: "40.000",
  },

  {
    id: 2,
    imgsrc: img9,
    destTitle: "santolo",
    location: "garut",
    price: "20.000",
  },

  {
    id: 3,
    imgsrc: img10,
    destTitle: "switzerland",
    location: "swiss",
    price: "20.000",
  },
];
const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">spesial offers</h2>
          <p>walawe barudak</p>
        </div>

        <div className="mainContent grid">
          {Data.map(({id,imgsrc,destTitle,location,price}) => {
            return (
              <div className="singleOffers">
                <div className="destImage">
                  <img src={imgsrc} alt={destTitle} />

                  <span className="discount">50% off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">for Rent</span>
                  </div>

                  <div className="amenitas flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>wifi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 vine #310, {location}</small>
                  </div>

                  <button className="btn flex">
                    view details
                    <MdKeyboardArrowRight className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
