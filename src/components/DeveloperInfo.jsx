import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHackerrank,
    faGithub,
    faLinkedin,
    faWhatsapp,
    faSkype,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/DeveloperInfo.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../ts-particles-config-files/developer-info-particles-config";

function DeveloperInfo() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <section id="developer-info">
            <Particles
                id="developer-info-ts-particles"
                init={particlesInit}
                options={particlesConfig}
            ></Particles>
            <div className="text-container">
                <h6>Want your own Card on the Internet, Visit:</h6>
                <a href="https://ziya-invites.netlify.app/">
                    <h4>
                        Ziya Invites
                        <sup>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="sm"
                            />
                        </sup>
                    </h4>
                </a>
                <br />
                <br />
                <h6>Or Contact:</h6>
                <a href="https://ziauddinziya07.github.io">
                    <h4>
                        Ziauddin Ziya
                        <sup>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="sm"
                            />
                        </sup>
                    </h4>
                </a>
                <p>
                    ziauddinziya07@gmail.com
                    <br />
                    +91 85550 92440.
                </p>

                <div className="icon-section">
                    <a
                        href="https://www.instagram.com/ziyainvites/"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                    <a href="https://wa.me/919573767548" className="icon-link">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                    </a>
                    <a
                        href="https://join.skype.com/invite/dr2WD0xsdMph"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faSkype} size="xl" />
                    </a>
                    <a
                        href="https://ziauddinziya07.github.io"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a
                        href="https://www.linkedin.in/in/ziauddinziya"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                        href="https://www.hackerrank.com/ziauddinziya07?hr_r=1"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faHackerrank} size="xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default DeveloperInfo;
