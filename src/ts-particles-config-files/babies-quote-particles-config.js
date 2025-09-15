const babiesQuoteParticlesConfig = {
    fps_limit: 60,
    fullScreen: {
        enable: false,
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                particles_nb: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#000428",
        },
        links: {
            color: "#004e9270",
            distance: 100,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            bounce: false,
            direction: "none",
            enable: true,
            outMode: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 300,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 3,
        },
    },
    detectRetina: true,
};

export default babiesQuoteParticlesConfig;
