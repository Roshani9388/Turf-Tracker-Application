import React from "react";

import Arjun from "../images/Arjun.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>



              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={Arjun} alt="anand" />
                  </div>
                  <div className="img-text">
                    <h2>Bhandwalkar Arjun Ganeshrao</h2>
                    <p>
                      Hi, I am Arjun. I am currently pursuing Post Graduate
                      Diploma from IET,Pune and my role in the project
                      is backend as well as frontend developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
