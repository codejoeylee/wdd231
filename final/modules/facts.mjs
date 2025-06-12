const facts = [
    {
        "fact": "1 in 5",
        "description": "People in the U.S. have an STI.",
        "image": "images/group.webp"
    },
    {
        "fact": "80%",
        "description": "Of STIs show no symptoms.",
        "image": "images/symptom@2x.webp"
    },
    {
        "fact": "HPV & Chlamydia",
        "description": "Are the most common STIs worldwide.",
        "image": "images/hpv@2x.webp"
    },
    {
        "fact": "STIs Can Affect Fertility",
        "description": "Untreated infections like chlamydia and gonorrhea can lead to infertility in both men and women.",
        "image": "images/sperm@2x.webp"
    },
    {
        "fact": "Condoms Aren’t 100% Effective",
        "description": "While condoms reduce STI risk, herpes and HPV can still spread through skin-to-skin contact.",
        "image": "images/male_condom@2x.webp"
    }
];




function renderFacts() {
    const factsContainer = document.getElementById('facts-container');

    facts.forEach(fact => {
        const factBox = document.createElement('div');
        factBox.classList.add('fact-box'); 
        const factImage = document.createElement('img');
        factImage.src = fact.image;
        factImage.alt = fact.fact;
        factImage.loading = "lazy";

        const factTitle = document.createElement('h3');
        factTitle.textContent = fact.fact;

        const factDescription = document.createElement('p');
        factDescription.textContent = fact.description;

        factBox.appendChild(factImage);
        factBox.appendChild(factTitle);
        factBox.appendChild(factDescription);
        factsContainer.appendChild(factBox);
    });

    observeFacts();
}


function observeFacts() {
    const factBoxes = document.querySelectorAll(".fact-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
            }
        });
    }, { threshold: 0.3 });

    factBoxes.forEach(box => observer.observe(box));
}


document.addEventListener('DOMContentLoaded', renderFacts);
