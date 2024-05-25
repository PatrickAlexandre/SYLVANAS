document.addEventListener("DOMContentLoaded", () => {
    const activitiesContainer = document.getElementById("activities");
    const completedActivitiesContainer = document.getElementById("completed-activities");
    const resetButton = document.getElementById("reset-button");

    // Load saved state
    const activities = document.querySelectorAll(".activity");
    activities.forEach(activity => {
        const savedState = localStorage.getItem(activity.id);
        if (savedState === "completed") {
            completedActivitiesContainer.appendChild(activity);
        }
    });

    // Hide activity on click
    activities.forEach(activity => {
        activity.addEventListener("click", () => {
            completedActivitiesContainer.appendChild(activity);
            localStorage.setItem(activity.id, "completed");
        });
    });

    // Reset activities
    resetButton.addEventListener("click", () => {
        while (completedActivitiesContainer.firstChild) {
            activitiesContainer.appendChild(completedActivitiesContainer.firstChild);
        }
        localStorage.clear();
    });
});
