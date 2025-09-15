import React from 'react';
import $ from 'jquery';
// import AOS from "aos";
import '../styles/CustomModel.css';

function CustomModel1() {
  function handleClick() {
    $('.card-flower').addClass('card-flower-fade-out-animation');

    setTimeout(() => {
      // card zoom-out animation
      window.scrollTo(0, 0);
      $('.card-outer-wrapper').addClass('zoom-out-animation');
      setTimeout(() => {
        // $("#card").css("display", "none");
        $('#card').fadeOut();
        $('.navbar').css('z-index', '2');
        $('.swing-icon').css('z-index', '2');
        $('.animated-logo').css('z-index', '2');
        $('body').removeAttr('style');
        document.getElementById('audio').play();
        document.getElementById('timer-video').play();

        startScroll();
      }, 1000);
    }, 1500);
  }

  // auto scroll starts when user clicks on "open" button
  function startScroll() {
    var length = document.querySelector('html').offsetHeight;
    setTimeout(() => {
      $('html, body').animate(
        {
          scrollTop: length - 500,
        },
        40000,
        'linear',
        function () {
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            5000,
            function () {
              $('.toast-message').fadeOut();
              document.querySelector('html').style.scrollBehavior = 'smooth';

              $('html, body').stop();
              $('html, body').off('click');
            }
          );
        }
      );
    }, 500);

    // stop the auto scroll when user clicks on screen
    setTimeout(function () {
      $('html, body').on('click', function (event) {
        $('html, body').stop();
        $('.toast-message').fadeOut();
        $('html, body').off('click');
        document.querySelector('html').style.scrollBehavior = 'smooth';
      });
    }, 1000);
  }

  return (
    <section id="card">
      <div className="card-outer-wrapper">
        <div className="card-inner-wrapper">
          <div data-aos="zoom-out" className="card-content">
            <h1 className="card-title m-0">
              Bichali Family's Engagement Ceremony Invitation
            </h1>
            <img
              src="../assets/images/line-divider.png"
              alt="line_divider"
              className="line-divider mb-4"
            />
            <h4 className="from">From:</h4>
            <h4 className="invitor-name mb-4">Mr. & Mrs. B. Khader</h4>
            <button
              className="btn btn-primary open-button"
              onClick={handleClick}
            >
              Open
            </button>
            <img
              src="../assets/images/card-flower.png"
              alt="card_flower"
              className="card-flower right"
            />
            <img
              src="../assets/images/card-flower.png"
              alt="card_flower"
              className="card-flower left"
            />
          </div>

          {/* <img
            src="../assets/images/card-corner.png"
            alt="card_corner"
            className="card-corner top-right"
          />
          <img
            src="../assets/images/card-corner.png"
            alt="card_corner"
            className="card-corner top-left"
          />
          <img
            src="../assets/images/card-corner.png"
            alt="card_corner"
            className="card-corner bottom-right"
          />
          <img
            src="../assets/images/card-corner.png"
            alt="card_corner"
            className="card-corner bottom-left"
          /> */}

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
      </div>
    </section>
  );
}

export default CustomModel1;
