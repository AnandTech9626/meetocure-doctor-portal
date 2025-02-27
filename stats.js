document.addEventListener("DOMContentLoaded", function () {
    // Example dummy data
    const appointmentsData = [10, 20, 15, 25, 30, 20, 10];
    const pendingData = [5, 3, 8, 2, 10, 6, 7];
    const earningsData = [1000, 2000, 3000, 2500, 4000, 3500, 3000];
    const patientsData = [25, 30, 15, 40, 35];

    // Function to safely update inner text
    function updateCount(elementId, data) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = data.reduce((a, b) => a + b, 0);
        }
    }

    // Update counts
    updateCount('appointmentsCount', appointmentsData);
    updateCount('pendingCount', pendingData);
    updateCount('earningsCount', earningsData);
    updateCount('patientsCount', patientsData);

    // Function to create small bar charts with labels (for stat cards)
    function createBarChart(containerId, data, maxHeight = 40) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; // Clear previous content

        const maxVal = Math.max(...data);

        data.forEach(value => {
            const barContainer = document.createElement('div');
            barContainer.style.display = 'flex';
            barContainer.style.flexDirection = 'column';
            barContainer.style.alignItems = 'center';
            barContainer.style.marginRight = '4px';

            const label = document.createElement('span');
            label.innerText = value;
            label.style.fontSize = '10px';
            label.style.marginBottom = '2px';

            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = (value / maxVal) * maxHeight + 'px';
            bar.style.width = '10px'; // Add width for visibility
            bar.style.backgroundColor = '#4CAF50'; // Add color

            barContainer.appendChild(label);
            barContainer.appendChild(bar);
            container.appendChild(barContainer);
        });
    }

    // Function to create the main chart with labels (e.g., for patients)
    function createMainChart(containerId, data, maxHeight = 100) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; // Clear previous content

        const maxVal = Math.max(...data);

        data.forEach(value => {
            const barContainer = document.createElement('div');
            barContainer.style.display = 'flex';
            barContainer.style.flexDirection = 'column';
            barContainer.style.alignItems = 'center';
            barContainer.style.marginRight = '6px';

            const label = document.createElement('span');
            label.innerText = value;
            label.style.fontSize = '12px';
            label.style.marginBottom = '2px';

            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = (value / maxVal) * maxHeight + 'px';
            bar.style.width = '25px';
            bar.style.backgroundColor = '#2196F3';

            barContainer.appendChild(label);
            barContainer.appendChild(bar);
            container.appendChild(barContainer);
        });
    }

    // Create small bar charts in the stat cards
    createBarChart('appointmentsChart', appointmentsData);
    createBarChart('pendingChart', pendingData);
    createBarChart('earningsChart', earningsData);
    createBarChart('patientsChart', patientsData);

    // Create the main bar chart for patients
    createMainChart('patientsMainChart', patientsData);
});
