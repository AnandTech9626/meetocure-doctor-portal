const appointments = [
    { date: "June 13, 2025", time: "10:00 AM", name: "Nithin Sai", age: 22, gender: "Male" },
    { date: "June 13, 2025", time: "11:00 AM", name: "Sneha Reddy", age: 28, gender: "Female" },
    { date: "June 13, 2025", time: "1:00 PM", name: "Rahul Sharma", age: 35, gender: "Male" }
];

function loadAppointments() {
    const appointmentDiv = document.getElementById("appointments");
    appointmentDiv.innerHTML = "";
    appointments.forEach((app, index) => {
        appointmentDiv.innerHTML += `
            <div class="mt-2 bg-white p-4 rounded-lg shadow fade-in" style="animation-delay: ${index * 0.2}s">
                <p class="text-sm"><strong>📅 ${app.date} | ⏰ ${app.time}</strong></p>
                <p><strong>Patient Name:</strong> ${app.name}</p>
                <p>👤 Age: ${app.age} | ${app.gender === "Male" ? "♂" : "♀"} Gender: ${app.gender}</p>
                <div class="mt-2 flex gap-2">
                    <button class="bg-gray-300 flex-1 py-2 rounded animated-button" onclick="alert('Appointment Cancelled')">Cancel</button>
                    <button class="bg-teal-600 text-white flex-1 py-2 rounded animated-button" onclick="alert('Viewing Details')">View</button>
                </div>
            </div>
        `;
    });
}
loadAppointments();
