import React, { useState } from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import "../styles/Audio.css";

function Audio() {
    var [isPlaying, setIsPlaying] = useState(true);

    function handleClick() {
        var audio = document.getElementById("audio");
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying((isPlaying = !isPlaying));
    }

    return (
        <section>
            <audio id="audio" loop>
            <source
                    src="../assets/audio-files/bg-music.mp3"
                    type="audio/mp3"
                />
            </audio>

            <div className="swing-icon">
                <button id="play-btn" onClick={handleClick}>
                    {isPlaying ? (
                        <MusicOffIcon fontSize="12px" />
                    ) : (
                        <MusicNoteIcon fontSize="12px" />
                    )}
                </button>
            </div>
        </section>
    );
}

export default Audio;
