import React, { useState } from "react";
import Clock from "./Clock";
import "../styles/CountDown.css";

function CountDown() {
    // let date1 = new Date("2023 2 23 12:45 PM");
    let date1 = Date.parse("2025-09-20T14:00:00");
    const [duration, setDuration] = useState({});

    function getDuration() {
        let date2 = Date.now();
        let diff = date1 - date2;

        setDuration({
            days:
                Math.floor(diff / (1000 * 60 * 60)) > 99
                    ? Math.floor(diff / (1000 * 60 * 60 * 24))
                    : 0,
            hours:
                Math.floor(diff / (1000 * 60 * 60)) > 99
                    ? Math.floor(diff / (1000 * 60 * 60)) % 24
                    : Math.floor(diff / (1000 * 60 * 60)),
            mins: Math.floor(diff / (1000 * 60)) % 60,
            secs: Math.floor(diff / 1000) % 60,
        });
    }

    setInterval(getDuration, 1000);

    return (
        <section id="count-down">
            <div className="count-down-wrapper">
                <div className="main">
                    <div className="row">
                        <div className="col-lg-5 bg-container">
                            <video
                            id="timer-video"
                                className="bg-video"
                                src="assets/videos/clock-bg.mp4"
                                autoPlay
                                loop
                            ></video>
                            <div className="bg-color">
                                <div className="title">
                                    <div className="content">
                                        <h5>We are waiting for</h5>
                                        <h1>The Big Day ...</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 my-auto clock">
                            <Clock duration={duration} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
