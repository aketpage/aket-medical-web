import React from "react";
import "../styles/home.css";
import hero from "../img/image-hero.png";

export const Home = () => {
  return (
    <div className="background">
      <div class="wave"></div>
      <div className="container">
        <div className="weCare">
          Cuidamos de las personas
          <br />
          afectadas por el cancer.
        </div>
        <div className="people">
          <img src={hero} width={500} alt="imagen" />
        </div>
      </div>
    </div>
  );
};
