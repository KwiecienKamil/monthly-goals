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
  const popup = document.querySelector(".popup-content");
  wrapper.innerHTML = "";

  const savedGoals = localStorage.getItem("goalsData");
  if (!savedGoals) {
    return;
  }
  const data = savedGoals ? JSON.parse(savedGoals) : goalsData;

  data.forEach((goal) => {
    // goals wrapper 
    const goalDiv = document.createElement("highlighted-section-goal");
    goalDiv.innerHTML = `
      <span>${goal.type}</span>
      <p>${goal.currentGoalProgress} / ${goal.finalGoal} ${goal.goalUnit}</p>
    `;
    wrapper.appendChild(goalDiv);

    // popup
    const updateGoalsDiv = document.createElement("div");
    updateGoalsDiv.innerHTML = `
      <div class="update-goal">
      <span>${goal.type}</span>
      <div>
      <span class="popup-plus">+</span>
      <input type="number" id="${goal.type}-value">
      <span>${goal.goalUnit}</span>
      </div>
      </div>
      `;
     popup.appendChild(updateGoalsDiv);
  });
  const btnDiv = document.createElement("div")
  btnDiv.classList.add("flex-center")
  const saveBtn = document.createElement("button");
      saveBtn.id = "save-activity-btn"
      saveBtn.textContent = "Save"
      popup.appendChild(btnDiv);
      btnDiv.appendChild(saveBtn);

  if (!savedGoals) {
    localStorage.setItem("goalsData", JSON.stringify(goalsData));
  }
};

// Popup 

const popup = document.getElementById("popup");
  const openBtn = document.getElementById("add-activity-btn");
  const closeBtn = document.getElementById("close-popup");

  openBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });


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