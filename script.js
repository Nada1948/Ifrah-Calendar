// Define the custom month names
const monthNames = [
    "Bunnuary", "Ifraduary", "March", "Poockleuary", "Ifracoon", "Loveober"
];

// Get the current date
const today = new Date();

// Get today's month and day
const currentMonth = today.getMonth(); // 0-based (January is 0, February is 1, etc.)
const currentDay = today.getDate();

// Function to generate the calendar
function generateCalendar() {
    const calendarDiv = document.getElementById("calendar");

    // Set the current month
    let currentMonthIndex = 0;

    // Loop through each month (since there are 6 months in your calendar)
    for (let monthIndex = 0; monthIndex < 6; monthIndex++) {
        // Create the header for each month
        const monthHeader = document.createElement("div");
        monthHeader.className = "month-header";
        monthHeader.innerText = monthNames[monthIndex];

        // Create the days for each month (11 days per month)
        const monthGrid = document.createElement("div");
        monthGrid.className = "month-grid";
        
        for (let day = 1; day <= 11; day++) {
            const dayCell = document.createElement("div");
            dayCell.className = "cell";

            // Set the day number
            dayCell.innerText = day;

            // Highlight today's day (Month 1, Day 1)
            if (monthIndex === currentMonth && day === currentDay) {
                dayCell.style.backgroundColor = "#bb4a57"; // Highlight today
                dayCell.style.color = "#fff";
            }

            monthGrid.appendChild(dayCell);
        }

        calendarDiv.appendChild(monthHeader);
        calendarDiv.appendChild(monthGrid);
    }
}

// Call the function to generate the calendar when the page loads
generateCalendar();
