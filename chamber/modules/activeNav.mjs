document.addEventListener("DOMContentLoaded", () => {
    let currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (!currentPage) currentPage = "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });
  