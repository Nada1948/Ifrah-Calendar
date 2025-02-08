// Define the custom month names
const monthNames = [
    "Bunnuary", "Ifraduary", "March", "Poockleuary", "Ifracoon", "Loveober"
];

// Define the number of days in each month (11 days per month)
const daysInMonth = 11;

// Get today's date
const today = new Date();
const currentMonth = today.getMonth(); // 0-based (January is 0, February is 1, etc.)
const currentDay = today.getDate();

// Track the current month index
let currentMonthIndex = currentMonth;

// Function to generate a specific month's calendar
function generateMonth(monthIndex) {
    const monthDiv = document.getElementById("calendar-month");
    monthDiv.innerHTML = ""; // Clear previous month content

    // Set the header for the current month
    const monthHeader = document.createElement("div");
    monthHeader.className = "month-header";
    monthHeader.innerText = monthNames[monthIndex];

    monthDiv.appendChild(monthHeader);

    // Create the grid for the month's days (11 days per month)
    const monthGrid = document.createElement("div");
    monthGrid.className = "grid";

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.className = "cell";
        dayCell.innerText = day;

        // Highlight today's date (if it's in the current month)
        if (monthIndex === currentMonth && day === currentDay) {
            dayCell.style.backgroundColor = "#e74c3c"; // Highlight today's day with red
            dayCell.style.color = "#fff";
        }

        monthGrid.appendChild(dayCell);
    }

    monthDiv.appendChild(monthGrid);
}

// Handle the "Next" and "Previous" month navigation
document.getElementById("next").addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex + 1) % 6; // Wrap around to the first month after the last one
    generateMonth(currentMonthIndex);
});

document.getElementById("prev").addEventListener("click", function() {
    currentMonthIndex = (currentMonthIndex - 1 + 6) % 6; // Wrap around to the last month before the first one
    generateMonth(currentMonthIndex);
});

// Initial month display
generateMonth(currentMonthIndex);
