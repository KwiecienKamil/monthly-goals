  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  
// Streak squares
const streakWrapper = document.getElementById("streak-wrapper");
  for (let day = 1; day <= daysInMonth; day++) {
    const square = document.createElement("div");
    square.classList.add("streak-square");
    streakWrapper.appendChild(square);
  }


// Formatted header date
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const dayName = days[today.getDay()];
const HeaderDay = String(today.getDate()).padStart(2, "0");
const HeaderMonth = String(today.getMonth() + 1).padStart(2, "0"); // months are 0-based
const HeaderYear = today.getFullYear();
const formattedDate = `${dayName}, ${HeaderDay}.${HeaderMonth}.${HeaderYear}`;

const dateP = document.getElementById("header-date");
dateP.textContent = formattedDate

// Render goals form default data or localStorage
  const renderGoalsData = async () => {
  const wrapper = document.querySelector(".goals-wrapper");
  wrapper.innerHTML = "";

  const savedGoals = localStorage.getItem("goalsData");
  if (!savedGoals) {
    return;
  }
  const data = savedGoals ? JSON.parse(savedGoals) : goalsData;

  data.forEach((goal) => {
    const goalDiv = document.createElement("highlighted-section-goal");

    goalDiv.innerHTML = `
      <span>${goal.type}</span>
      <p>${goal.currentGoalProgress} / ${goal.finalGoal} ${goal.goalUnit}</p>
    `;

    wrapper.appendChild(goalDiv);
  });

  if (!savedGoals) {
    localStorage.setItem("goalsData", JSON.stringify(goalsData));
  }
};


// Data
const goalsData = [
  {
    id: 111,
    type: "Running",
    finalGoal: 20,
    goalUnit: "KM",
    currentGoalProgress: 0
  },
  {
    id: 112,
    type: "Push ups",
    finalGoal: 1000,
    goalUnit: "",
    currentGoalProgress: 0
  },
  {
    id: 113,
    type: "Meditation",
    finalGoal: 120,
    goalUnit: "MIN",
    currentGoalProgress: 0
  },
]

renderGoalsData();