import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import $ from "jquery";
import "../styles/Navbar.css";

function Navbar() {
    let isFullNavActive = false;
    function handleNavToggle() {
        if (!isFullNavActive) {
            $(".navbar-collapse").css({
                display: "none",
            });
            $(".full-scrn-nav").css({
                display: "block",
            });
            $("#menu-btn").toggle();
            isFullNavActive = !isFullNavActive;
        } else {
            $(".full-scrn-nav").css({
                display: "none",
            });
            $("#menu-btn").toggle();
            isFullNavActive = !isFullNavActive;
        }
    }

    useEffect(() => {
        /**
         * Changing the active-link for respective sections in the Navbar when
         * page scrolled
         *  */
        $(window).on("scroll", function () {
            const navLinks = $(".navbar-nav .nav-item .nav-link");

            let index = 0;
            for (let i = 0, len = navLinks.length; i < len; i++) {
                const id = "#" + navLinks[i].href.split("#")[1];

                const idTopPos = $(id).position().top - 150;
                if ($(window).scrollTop() > idTopPos) {
                    index = i;
                }
            }

            $(".navbar-nav .nav-item").removeClass("active");
            $(".full-scrn-nav .list-item").removeClass("active");
            $(".navbar-nav .nav-item").eq(index).addClass("active");
            $(".full-scrn-nav .list-item").eq(index).addClass("active");
        });
    }, []);

    return (
        <section id="navbar">
            <nav className="navbar fixed-top navbar-dark navbar-expand-lg">
                <a
                    className="navbar-brand"
                    href="#header"
                    data-aos="slide-right"
                    data-aso-duration="1500"
                >
                    SSV
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="icon"
                        size="sm"
                    />
                    Mubeena
                </a>
                <button
                    className="navbar-toggler"
                    id="menu-btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleNavToggle}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="navbar-toggler-icon"
                    />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header">
                                Header
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#slide">
                                Slide
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#couple">
                                Couple
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#timeline">
                                Event Date
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#count-down">
                                Timer
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#invite-note">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="full-scrn-nav">
                <div className="full-scrn-nav-wrapper">
                    <div className="full-scrn-nav-content">
                        <button
                            className="navbar-toggler"
                            onClick={handleNavToggle}
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="navbar-toggler-icon xmark"
                            />
                        </button>
                        <ul>
                            <li className="list-item active">
                                <a
                                    href="#header"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Header
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#slide"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Slide
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#couple"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Couple
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#timeline"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Event Date
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#count-down"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Timer
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#invite-note"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
