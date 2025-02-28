flatpickr("#calendar", {
    enableTime: false,
    dateFormat: "Y-m-d",
});

const timeGrid = document.getElementById('time-grid');
const confirmBtn = document.getElementById('confirm-btn');
const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM"
];

let selectedTime = "10:00 AM";

function createButtons(container, items, selectedValue) {
    container.innerHTML = "";
    items.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item;
        if (item === selectedValue) {
            button.classList.add('selected');
        }
        button.addEventListener('click', () => {
            selectedTime = item;
            createButtons(container, items, selectedTime);
        });
        container.appendChild(button);
    });
}

createButtons(timeGrid, timeSlots, selectedTime);

confirmBtn.addEventListener('click', () => {
    Swal.fire({
        title: "🎉 Congratulations!",
        text: `Your appointment is confirmed for ${selectedTime}.`,
        icon: "success",
        confirmButtonText: "OK",
        backdrop: true,
        timer: 3000,
        showClass: {
            popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut'
        }
    });
});
