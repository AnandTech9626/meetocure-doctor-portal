function MeetocureApp() {
    const [searchDoctor, setSearchDoctor] = React.useState("");
    const [searchLocation, setSearchLocation] = React.useState("");
    const [chooseDate, setChooseDate] = React.useState("");

    const findResults = () => {
        if (!searchDoctor || !searchLocation || !chooseDate) {
            alert("Please fill all fields!");
        } else {
            alert(`Searching for ${searchDoctor} in ${searchLocation} on ${chooseDate}`);
        }
    };

    return (
        <div>
            <div className="mobile-frame">
                <div className="app-screen">
                    <h3>
                        Location
                        <select className="location-select">
                            <option></option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                        </select>
                    </h3>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="🩺 Search doctor"
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="📍 Search Location"
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                        />
                        <input
                            type="date"
                            value={chooseDate}
                            onChange={(e) => setChooseDate(e.target.value)}
                        />
                    </div>

                    <button className="find-results" onClick={findResults}>
                        Find Results
                    </button>
                </div>
            </div>

            <div className="welcome-card">
                <div className="logo">🧬</div>
                <h3>Meetocure</h3>
                <h1>
                    <p>Let’s get started</p>
                </h1>
                <span>Choose your role</span>

                <button className="role-btn" onClick={() => alert("Patient role selected")}>
                    🤵🏻 Patient
                </button>
                <button className="role-btn" onClick={() => alert("Doctor role selected")}>
                    👨‍⚕️ Doctor
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(<MeetocureApp />, document.getElementById("root"));
