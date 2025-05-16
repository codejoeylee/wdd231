async function fetchMembers() {
  const response = await fetch("json/members.json");
  const data = await response.json();
  displayMembers(data.companies);
}

const displayMembers = (companies) => {
  companies.forEach((company) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let Email = document.createElement("h5");
    let Phone = document.createElement("h5");
    let Website = document.createElement("h5");
    let portrait = document.createElement("img");

    fullName.textContent = `${company.name}`;
    Email.textContent = `Email: ${company.email}`;
    Phone.textContent = `Phone: ${company.phone}`;

    
    let websiteLink = document.createElement("a");
    websiteLink.href = company.website;
    websiteLink.textContent = company.website;
    websiteLink.target = "_blank"; 
    websiteLink.style.textDecoration = "none";
    websiteLink.style.color = "white"; 
    Website.style.backgroundColor = "#1D5CCA";
    websiteLink.style.backgroundColor = "#1D5CCA"
    websiteLink.style.fontWeight = "bold"; 
    websiteLink.style.wordBreak = "break-word"; 
    websiteLink.style.overflowWrap = "break-word";
    Website.innerHTML = `Website: `; 
    Website.appendChild(websiteLink);

    portrait.setAttribute("src", company.image);
    portrait.setAttribute("alt", `Logo of ${company.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(Email);
    card.appendChild(Phone);
    card.appendChild(Website);
    card.appendChild(portrait);

    document.querySelector("div.cards").appendChild(card);
  });
};

fetchMembers();

document.querySelector(".btn1").addEventListener("click", () => {
  document.querySelector(".cards").classList.remove("list-view");
  document.querySelector(".cards").classList.add("grid-view");
});

document.querySelector(".btn2").addEventListener("click", () => {
  document.querySelector(".cards").classList.remove("grid-view");
  document.querySelector(".cards").classList.add("list-view");
});

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;

const fulldate = document.querySelector("#lastModified");

fulldate.innerHTML = `Last Modification : <span class="highlight">${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
    timeStyle: "medium",
  }
).format(today)}</span>`;
