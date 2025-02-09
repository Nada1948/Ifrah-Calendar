// Define months
const monthNames = [
    "Bunnuary", "Ifraduary", "March", "Poockleuary", "Ifracoon", "Loveober"
];

const daysInMonth = 11; // Each month has 11 days

let currentMonthIndex = 0; // Start at the first month

// Messages for the first month
const messages = [
    "I love you Ifrah :)",
    "You're so warm, hope you have a good day today!",
    "I'll always be there for you bunny",
    "You're the light of my day <3",
    "I'M SO INLOVE WITH YOU!!",
    "Take care of yourself always :)",
    "Heart eyes thinking about you",
    "An art gallery could never be as magnificent as you",
    "You're my everything, my everything.",
    "You're on my mind, all the time, can't stop thinking about you",
    "I miss you"
];

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
        dayCell.onclick = function () {
            showNoteForDay(day);
        };
        monthGrid.appendChild(dayCell);
    }

    monthDiv.appendChild(monthGrid);
}

// Function to show note for day
function showNoteForDay(day) {
    const noteBox = document.getElementById("note-box");
    const noteHeader = document.getElementById("note-header");
    const noteText = document.getElementById("note-text");

    // Check if there's a message for the day, else show a default message
    if (day <= messages.length) {
        noteHeader.innerText = "Message for Day " + day;
        noteText.innerText = messages[day - 1];
    } else {
        noteHeader.innerText = "No Message Yet";
        noteText.innerText = "You haven't added a message for this day!";
    }

    noteBox.style.display = "block";
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
