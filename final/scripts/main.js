function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


document.addEventListener("DOMContentLoaded", function () {
    const factBoxes = document.querySelectorAll(".fact-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    factBoxes.forEach(box => observer.observe(box));
});




document.addEventListener("DOMContentLoaded", function () {
    const factsContainer = document.getElementById("facts-container");

    facts.forEach(fact => {
        const factBox = document.createElement("div");
        factBox.classList.add("fact-box");


        const img = document.createElement("img");
        img.src = fact.image;
        img.alt = fact.fact;
        img.loading = "lazy";


        const heading = document.createElement("h3");
        heading.textContent = fact.fact;


        const paragraph = document.createElement("p");
        paragraph.textContent = fact.description;


        factBox.appendChild(img);
        factBox.appendChild(heading);
        factBox.appendChild(paragraph);


        factsContainer.appendChild(factBox);
    });
});
