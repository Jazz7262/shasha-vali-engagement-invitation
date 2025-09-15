import React, { useCallback } from 'react';
import '../styles/Couple.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import coupleParticlesConfig from '../ts-particles-config-files/couple-particles-config';

function Couple() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="couple">
      <div className="couple-wrapper">
        <Particles
          id="couple-ts-particles"
          init={particlesInit}
          options={coupleParticlesConfig}
        ></Particles>
        <h1 className="title-quote">Happy Couple Going To Be Married</h1>
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
            <div
              id="carouselIndicators"
              className="carousel slide"
              data-interval="2000"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                {/* <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="3"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="4"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="5"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="6"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="7"
                                ></li> */}
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-wrapper">
                    <img
                      className="couple-img"
                      src="../assets/images/groom.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-wrapper">
                    <img
                      className="couple-img"
                      src="../assets/images/groom.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-wrapper">
                    <img
                      className="couple-img"
                      src="../assets/images/groom.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
              <img
                className="flower groom-flower"
                src="../assets/images/golden-rose.png"
                alt="flower"
              />
            </div>
            <div className="info groom-info">
              <h3>
                B. Shasha Vali 
                {/* <sub>MCA,</sub> */}
              </h3>
              <p className="mt-2 mt-lg-3">
                Proprietor: <strong>SSV PAints,</strong> Asianpaints Authorised
                Dealer
              </p>
              <p className="mt-1 mt-lg-2"> at Alur.</p>
              {/* <p className="mt-2 mt-lg-3">
                                S/O Janab{" "}
                                <strong>Shabeer Ahmed Sahab(Late)</strong>
                            </p> */}
              <p className="mt-1 mt-lg-2">
                Paternal Grand S/O Janab <strong>B. Nabi Sahab(Late),</strong>{' '}
              </p>
              {/* <p className="mt-1 mt-lg-2">APSRTC, Adoni.</p> */}

              <p className="mt-1 mt-lg-2">
                Maternal Grand S/O Janab <strong>K. Laalu Sahab(Late),</strong>{' '}
              </p>
              {/* <p className="mt-1 mt-lg-2">Revenue Department, Pattikonda.</p> */}

              {/* <p className="mt-1 mt-lg-2">
                                S/O Janab <strong>B. Khadar Sahab,</strong>{" "}
                            </p>
                            <p className="mt-1 mt-lg-2">
                                APSRTC, Adoni.
                            </p>
                            <p className="mt-1 mt-lg-2">
                                Residence at RTC Colony, Adoni.
                            </p> */}
            </div>
          </div>
          <div className="col-lg-2" data-aos="zoom-out " data-aos-delay="300">
            <img
              className=" heart-mid"
              src="../assets/images/heart.png"
              alt="heart_img"
            />
          </div>
          <div className="col-lg-5" data-aos="fade-up">
            <div
              id="bride-carousel-indicators"
              className="carousel slide"
              data-interval="2000"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#bride-carousel-indicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#bride-carousel-indicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#bride-carousel-indicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-wrapper">
                    <img
                      className="couple-img bride"
                      src="../assets/images/bride.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-wrapper">
                    <img
                      className="couple-img bride "
                      src="../assets/images/bride.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-wrapper">
                    <img
                      className="couple-img bride"
                      src="../assets/images/bride.png"
                      alt="couple_img"
                    />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#bride-carousel-indicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#bride-carousel-indicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
              <img
                className="flower bride-flower"
                src="../assets/images/golden-rose.png"
                alt="flower"
              />
            </div>
            <div className="info bride-info">
              <h3>
                C. S. Mubeena
                {/* <sub>(Moulvi),</sub> */}
              </h3>
              {/* <p className="mt-2 mt-lg-3">
                                Professsion: <strong>Software Engineer,</strong>
                            </p> */}
              <p className="mt-2 mt-lg-3">
                 Grand D/O Janab Al-haaj
                <strong>C. S. Abdul Rasool Ashrafi Sahab(Late),</strong>
              </p>
              {/* <p className="mt-1 mt-lg-2">
                Maternal Grand D/O Janab{' '}
                <strong>B. Basheer Ahmed Sahab(Late).</strong>
              </p> */}
              {/* <p className="mt-1 mt-lg-2">
                                H.No.: 24/90, Near Saheb Bowdi,  
                            </p>
                            <p className="mt-1 mt-lg-2">KowdiyalPet, Adoni.</p> */}
              {/* <p className="mt-1 mt-lg-2">Bellari.</p> */}
              {/* <p className="mt-1 mt-lg-2">
                                D/O <strong>Shaikh Nazeer Ahmed.</strong>
                            </p> */}
              <p className="mt-1 mt-lg-2">
                D/O Janab <strong>C. S. Khader Sahab,</strong>{' '}
              </p>
              {/* <p className="mt-1 mt-lg-2">
                Proprietor: Mohammed Ali Jewellers,
              </p>
              <p className="mt-1 mt-lg-2">Shroff Bazaar, Adoni.</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
