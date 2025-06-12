document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
