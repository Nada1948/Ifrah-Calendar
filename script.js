const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];
const daysInMonth = 11;
const totalDays = 66;

function getCurrentIfrahDay() {
    const startDate = new Date("2024-08-19"); // Start date of Ifrah Calendar
    const today = new Date();
    const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    return daysSinceStart % totalDays;
}

function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    let dayCounter = 0;

    months.forEach(month => {
        const monthLabel = document.createElement("div");
        monthLabel.className = "month";
        monthLabel.textContent = month;
        calendarContainer.appendChild(monthLabel);

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day";
            dayElement.textContent = `Day ${day}`;
            if (dayCounter === getCurrentIfrahDay()) {
                dayElement.classList.add("active");
            }
            calendarContainer.appendChild(dayElement);
            dayCounter++;
        }
    });
}

generateCalendar();
