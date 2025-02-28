function OTPVerification() {
    const [otp, setOtp] = React.useState(Array(6).fill(""));

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return; // Allow only numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next field
        if (value !== "" && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join("");
        alert(`OTP Entered: ${otpCode}`);
    };

    const handleResend = () => {
        alert("OTP has been resent to your mobile number.");
        setOtp(Array(6).fill(""));
    };

    return (
        <div className="otp-container">
            <h1 className="logo">🧬</h1>
            <h4>Meetocure</h4>
            <h2>Verify Code</h2>
            <p>Enter the code we just sent to your mobile number</p>
            <form onSubmit={handleSubmit}>
                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            id={`otp-${index}`}
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength="1"
                            autoFocus={index === 0}
                            required
                        />
                    ))}
                </div>
                <div className="buttons">
                    <button type="submit" className="verify-button">Verify</button>
                </div>
            </form>
            <p>Didn't get the code? <a className="resend-link" onClick={handleResend}>Resend</a></p>
        </div>
    );
}

ReactDOM.render(<OTPVerification />, document.getElementById("root"));
