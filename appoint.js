const appointments = [
    { date: "June 13, 2025", time: "10:00 AM", name: "NARENDRA", age: 22, gender: "Male", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { date: "June 13, 2025", time: "11:00 AM", name: "SONIA", age: 28, gender: "Female", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { date: "June 13, 2025", time: "1:00 PM", name: "Rahul Sharma", age: 35, gender: "Male", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { date: "June 13, 2025", time: "10:00 AM", name: "AMITH", age: 22, gender: "Male", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { date: "June 13, 2025", time: "10:00 AM", name: "ANAND", age: 22, gender: "Male", image: "https://randomuser.me/api/portraits/men/1.jpg" },
];

function loadAppointments() {
    const appointmentDiv = document.getElementById("appointments");
    appointmentDiv.innerHTML = "";
    appointments.forEach((app) => {
        appointmentDiv.innerHTML += `
            <div class="mt-4 bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
                <img src="${app.image}" alt="${app.name}" class="w-16 h-16 rounded-full border border-gray-300">
                <div class="flex-1 text-sm">
                    <p class="text-gray-500">📅 ${app.date} | ⏰ ${app.time}</p>
                    <p class="text-lg font-semibold">${app.name}</p>
                    <p class="text-gray-600">👤 Age: ${app.age} | ${app.gender === "Male" ? "♂" : "♀"} Gender: ${app.gender}</p>
                    <div class="mt-2 flex gap-2">
                        <button class="bg-gray-300 flex-1 py-2 rounded hover:bg-gray-400" onclick="alert('Appointment Cancelled')">Cancel</button>
                        <button class="bg-teal-600 text-white flex-1 py-2 rounded hover:bg-teal-700" onclick="alert('Viewing Details')">View</button>
                    </div>
                </div>
            </div>
        `;
    });
}
loadAppointments();
