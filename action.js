let sad = document.querySelector("#sad");
let stress = document.querySelector("#stress");
let normal = document.querySelector("#normal");
let happy = document.querySelector("#happy");
let excited = document.querySelector("#excited");

let moodDisplay = document.querySelector("#mood-display");
let themeToggle = document.querySelector("#theme-toggle");

let habitInput = document.querySelector("#habits");
let button = document.querySelector("#addhabit");
let habitList = document.querySelector("#habit-list");

let progressBar = document.querySelector("progress");
let percentageDisplay = document.querySelector("#percentage");
let affirmationButton = document.querySelector("#btn");
let affirmationpara = document.querySelector(".affirmation p");
let arraybtn = [
    "I believe in myself. 💗",
    "I am proud of how far I've come. 🌸",
    "I can learn and improve every day. ✨",
    "I don't need to be perfect to make progress. 💕",
    "I am capable of achieving my goals. 🌟",
    "I choose to be kind to myself today. 🦋",
    "Small steps still count as progress. 🌷",
    "I trust myself and my journey. 💜"
];

affirmationButton.addEventListener("click" , ()=>{
    let randomIndex = Math.floor(Math.random() * arraybtn.length);
    let randomArray =arraybtn[randomIndex];

console.log("Random Index:", randomIndex);
console.log("Random Value:", randomArray);
affirmationpara.textContent = `${randomArray}`;
});

// ================= MOOD =================

sad.addEventListener("click", () => {
    moodDisplay.textContent =
        "You seem a little sad today. Be gentle with yourself. 💗";
});

stress.addEventListener("click", () => {
    moodDisplay.textContent =
        "Take a little break. You can handle today. 🌸";
});

normal.addEventListener("click", () => {
    moodDisplay.textContent =
        "It's okay to have an ordinary day. 😊";
});

happy.addEventListener("click", () => {
    moodDisplay.textContent =
        "Yay! Keep that positive energy! 💕";
});

excited.addEventListener("click", () => {
    moodDisplay.textContent =
        "You're feeling amazing today! ✨";
});

// ================= DARK MODE =================

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// ================= PROGRESS =================

function updateProgressBar() {
    let totalHabits = habitList.querySelectorAll("li").length;
    let completedHabits =
        habitList.querySelectorAll("li.completed").length;

    let percentage = totalHabits > 0
        ? Math.round((completedHabits / totalHabits) * 100)
        : 0;

    progressBar.value = percentage;
    percentageDisplay.textContent = `${percentage}%`;
}

// ================= EXISTING HABITS =================

// Give the original 5 habits checkbox functionality
let existingCheckboxes = habitList.querySelectorAll(
    'input[type="checkbox"]'
);

existingCheckboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", () => {

        let list = checkbox.parentElement;

        list.classList.toggle("completed");

        updateProgressBar();
    });

});

// ================= ADD NEW HABIT =================

button.addEventListener("click", () => {

    let habit = habitInput.value;

    if (habit.trim() === "") {

        console.log("stop");

    } else {

        let list = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        list.append(checkbox);

        let habitText = document.createTextNode(habit);
        list.append(habitText);

        habitList.append(list);

        habitInput.value = "";

        checkbox.addEventListener("change", () => {

            list.classList.toggle("completed");

            updateProgressBar();

        });

        updateProgressBar();
    }
});

// Initial progress
updateProgressBar();