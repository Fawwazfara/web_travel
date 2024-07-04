import React from "react";
import "./popular.css";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

import img from "../../assets/image(1).jpg";
import img2 from "../../assets/image(2).jpg";
import img3 from "../../assets/image(3).jpg";
import img4 from "../../assets/image(4).jpg";
import img5 from "../../assets/image(5).jpg";

const Data = [
  {
    id: 1,
    imgsrc: img2,
    destTitle: "taj mahal",
    location: "india",
    grade: "cultural lerax",
  },

  {
    id: 2,
    imgsrc: img3,
    destTitle: "santolo",
    location: "garut",
    grade: "cultural lerax",
  },

  {
    id: 3,
    imgsrc: img4,
    destTitle: "switzerland",
    location: "swiss",
    grade: "cultural lerax",
  },

  {
    id: 4,
    imgsrc: img5,
    destTitle: "kyoto",
    location: "japan",
    grade: "cultural lerax",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Tempat nu sok di datangan ku barudak</h2>
            <p>
              tah tempat iye nu sok loba di datangan mah ku bule ku alien jeung
              sajabana
            </p>
          </div>

          <div className="iconsDiv flex">
            <FiArrowLeft className="icon leftIcons" />
            <FiArrowRight className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({id,imgsrc,destTitle,location,grade}) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgsrc} alt="image title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <FiArrowRight className="icon" />
                  </div>
                </div>

                <div className="destfooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
