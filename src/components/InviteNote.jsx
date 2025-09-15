import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. B. Khader</h2>

                <h5 className="address mb-3">
                    Profession: RTC Employee,
                    <br /> Adoni.
                </h5>
                <h5 className="address mb-3">
                    Residence: Near Shelley School,
                    <br /> RTC Colony, Adoni,
                    <br /> Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 73828 69630, <br />
                    +91 99853 66980.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;