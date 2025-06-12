const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Anonymous";
const email = params.get("email") || "Not Provided";
const interest = params.get("interest") || "No selection";

document.getElementById("result").innerHTML =
    `<strong>Name:</strong> ${name} <br>
<strong>Email:</strong> ${email} <br>
<strong>Interest:</strong> ${interest}`;


