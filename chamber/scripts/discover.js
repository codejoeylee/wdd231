async function loadDiscoverItems() {
  try {
    const response = await fetch("json/discover.json");
    const data = await response.json();
    const grid = document.querySelector(".discover-grid");

    data.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "discover-card";
      card.innerHTML = `
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </figure>
                <h2>${item.name}</h2>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading discover items:", error);
  }
}

function displayVisitMessage() {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentDate = Date.now();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const daysSinceLastVisit = Math.floor(
      (currentDate - parseInt(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${
        daysSinceLastVisit === 1 ? "day" : "days"
      } ago.`;
    }
  }

  localStorage.setItem("lastVisit", currentDate.toString());
}

document.addEventListener("DOMContentLoaded", () => {
  loadDiscoverItems();
  displayVisitMessage();
});
