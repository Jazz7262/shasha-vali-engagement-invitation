import React from 'react';
import '../styles/Slide.css';

function Slide() {
  return (
    <section id="slide">
      <div className="slide-wrapper">
        <div className="slide-content">
          {/* <div
                        className="img-container"
                        data-aos="zoom-out"
                        data-aos-offset="300"
                    >
                        <img alt="big_wheel" src="./assets/images/wheel.png" />
                    </div> */}
          <div
            className="text-content"
            data-aos="fade-in"
            data-aos-offset="300"
            data-aos-delay="50"
          >
            <h4>WE ARE ARRANGING OUR SON'S Engagement</h4>
            <h1>Save Our Date</h1>
            <p>
              20<sup>th</sup> September, 2025
            </p>
          </div>
        </div>
        <img
          className="mandal top-1"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal top-2"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal top-3"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal top-4"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal top-5"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal bottom-1"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal bottom-2"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal bottom-3"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />

        <img
          className="mandal bottom-4"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
        <img
          className="mandal bottom-5"
          src="../assets/images/golden-mandal.png"
          alt="Wheel"
        />
      </div>
    </section>
  );
}

export default Slide;
