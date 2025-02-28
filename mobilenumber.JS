function sendCode() {
    let mobile = document.getElementById('mobile').value;

    if (mobile.length < 10 || isNaN(mobile)) {
        alert("Please enter a valid mobile number!");
        return;
    }

    alert("Verification code sent to " + mobile);
}
