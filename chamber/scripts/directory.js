let menulist = document.getElementById("menulist");
let menuIcon = document.querySelector(".menu-icon i");

menulist.style.display = "none";

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('active');
    
   
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}


document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menulist.style.display = "flex";
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  } else {
    menulist.style.display = "none";
  }
});





