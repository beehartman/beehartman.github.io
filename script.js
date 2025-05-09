function checkAge() {
  const ageInput = document.getElementById("ageInput");
  const age = parseInt(ageInput.value);
  const message = document.getElementById("ageMessage");
  const colorList = document.getElementById("colorList");

  // Clear old colors
  colorList.innerHTML = "";

  // Validate input
  if (isNaN(age)) {
    message.textContent = "Please enter a valid number.";
    document.body.style.backgroundColor = "white";
    return;
  }

  // Determine age group message
  if (age < 18) {
    message.textContent = "You are a minor.";
  } else if (age >= 18 && age < 65) {
    message.textContent = "You are an adult.";
  } else {
    message.textContent = "You are a senior.";
  }

  // Define color based on age range and change background
  let bgColor = "";
  if (age >= 0 && age <= 20) {
    bgColor = "red";
  } else if (age >= 21 && age <= 30) {
    bgColor = "orange";
  } else if (age >= 31 && age <= 40) {
    bgColor = "yellow";
  } else if (age >= 41 && age <= 50) {
    bgColor = "green";
  } else if (age >= 51 && age <= 60) {
    bgColor = "blue";
  } else if (age >= 61) {
    bgColor = "purple";
  }

  document.body.style.backgroundColor = bgColor;

  // Always show full color list
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
  for (let i = 0; i < colors.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = colors[i];
    colorList.appendChild(listItem);
  }
}