let menulist = document.getElementById("menulist");

let menuIcon = document.querySelector(".menu-toggle");




  function toggleMenu() {
    const isHidden = menulist.style.display === "none";
  
    menulist.style.display = isHidden ? "block" : "none";
    menuIcon.classList.toggle("fa-bars", !isHidden);
    menuIcon.classList.toggle("fa-times", isHidden);
  }
  
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menulist.style.display = "flex"; 
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    } else if (menulist.style.display !== "block") {
      menulist.style.display = "none"; 
    }
  });



