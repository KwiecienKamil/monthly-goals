const streakWrapper = document.getElementById("streak-wrapper");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();


  for (let day = 1; day <= daysInMonth; day++) {
    const square = document.createElement("div");
    square.classList.add("streak-square");
    streakWrapper.appendChild(square);
  }