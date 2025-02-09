// Define custom months
const monthNames = [
    "Bunnuary", "Ifraduary", "March", "Poockleuary", "Ifracoon", "Loveober"
];

// Define the number of days in each month (11 days per month)
const daysInMonth = 11;

// Track the current month index
let currentMonthIndex = 0;

// Function to generate a specific month's calendar
function generateMonth(monthIndex) {
    const monthDiv = document.getElementById("calendar-month");
    monthDiv.innerHTML = ""; // Clear previous month content

    // Set the header for the current month
    const monthHeader = document.createElement("div");
    monthHeader.className = "month-header";
    monthHeader.innerText = monthNames[monthIndex];

    monthDiv.appendChild(monthHeader);

    // Create the grid for the month's days
    const monthGrid = document.createElement("div");
    monthGrid.className = "grid";

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.className = "cell";
        dayCell.innerText = day;

        monthGrid.appendChild(dayCell);
    }

    monthDiv.appendChild(monthGrid);
}

// Handle Next and Previous month navigation
document.getElementById("next").addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex + 1) % 6; // Wrap around
    generateMonth(currentMonthIndex);
});

document.getElementById("prev").addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex - 1 + 6) % 6; // Wrap around
    generateMonth(currentMonthIndex);
});

// Initialize Calendar
generateMonth(currentMonthIndex);
