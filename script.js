// Define months
const monthNames = [
    "Bunnuary", "Ifraduary", "March", "Poockleuary", "Ifracoon", "Loveober"
];

const daysInMonth = 11; // Each month has 11 days

let currentMonthIndex = 0; // Start at the first month

// Function to generate calendar
function generateMonth(monthIndex) {
    const monthDiv = document.getElementById("calendar-month");
    monthDiv.innerHTML = "";

    // Month title
    const monthHeader = document.createElement("div");
    monthHeader.className = "month-header";
    monthHeader.innerText = monthNames[monthIndex];
    monthDiv.appendChild(monthHeader);

    // Create grid
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

// Handle navigation
document.getElementById("next").addEventListener("click", function () {
    currentMonthIndex = (currentMonthIndex + 1) % 6;
    generateMonth(currentMonthIndex);
});

document.getElementById("prev").addEventListener("click", function () {
    currentMonthIndex = (currentMonthIndex - 1 + 6) % 6;
    generateMonth(currentMonthIndex);
});

// Initialize first month
generateMonth(currentMonthIndex);
