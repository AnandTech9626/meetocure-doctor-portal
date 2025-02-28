function RegistrationForm() {
    const [selectedGender, setSelectedGender] = React.useState(null);

    return (
        <div className="container">
            <div className="logo">
                <i className="fa-solid fa-dna"></i>
            </div>
            <h2>Hi, Welcome!</h2>
            <p>Fill the details and register here</p>

            <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Full Name" />
            </div>

            <div className="input-group">
                <label>Date of Birth</label>
                <input type="date" />
            </div>

            <label className="gender-label">Gender</label>
            <div className="gender-group">
                <button 
                    className={selectedGender === 'Male' ? 'selected' : ''} 
                    onClick={() => setSelectedGender('Male')}
                >
                    <i className="fa-solid fa-mars"></i> Male
                </button>
                <button 
                    className={selectedGender === 'Female' ? 'selected' : ''} 
                    onClick={() => setSelectedGender('Female')}
                >
                    <i className="fa-solid fa-venus"></i> Female
                </button>
                <button 
                    className={selectedGender === 'Other' ? 'selected' : ''} 
                    onClick={() => setSelectedGender('Other')}
                >
                    Others
                </button>
            </div>
            <br/>

            <button className="submit-btn" onClick={() => alert("Code sent Successfully")}>Submit</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RegistrationForm />);
