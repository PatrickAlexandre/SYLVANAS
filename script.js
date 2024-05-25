// script.js
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Load saved state
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }
    });

    // Save state on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});
