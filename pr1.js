// Simulated real-time data
let currentCount = 0;
let status = "Normal";

function updateData() {
    // Simulate data updates
    currentCount = Math.floor(Math.random() * 100);
    status = currentCount > 80 ? "Crowded" : "Normal";

    // Update the dashboard with new data
    document.getElementById("count").textContent = currentCount;
    document.getElementById("status-text").textContent = status;
}

// Update data every 3 seconds (simulating real-time updates)
setInterval(updateData, 3000);
