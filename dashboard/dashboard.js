document.addEventListener("DOMContentLoaded", () => {
    // Example data: Replace with live data
    // const rideRequest = {
    //     currentStage: null, 
    //     details: [], // Empty array if no trip history
    // };

    const rideRequest = {
        currentStage: "Driver Arrived", // Current ride status
        details: {
            from: "Union Building",
            to: "Walmart",
                date: "2024-11-20",
                time: "10:00 AM",
            },
    };

    const noRequestMessage = document.getElementById("no-request");
    const statusBar = document.getElementById("status-bar");
    const upcomingTripSection = document.getElementById("upcoming-trip");
    const statusStages = document.getElementById("status-stages");

    if (!rideRequest.currentStage) {
        // No request: Show "No request yet" and hide status bar
        noRequestMessage.classList.remove("hidden");
        statusBar.classList.add("hidden");
    } else {
        // Active request: Show status bar and hide "No request yet"
        noRequestMessage.classList.add("hidden");
        statusBar.classList.remove("hidden");

        // Populate trip details
        document.getElementById("trip-from").textContent = rideRequest.details.from;
        document.getElementById("trip-to").textContent = rideRequest.details.to;
        document.getElementById("trip-date").textContent = rideRequest.details.date;
        document.getElementById("trip-time").textContent = rideRequest.details.time;

        // Highlight the current stage
        const stages = Array.from(document.querySelectorAll(".status-stage"));
        stages.forEach(stage => {
            if (stage.textContent === rideRequest.currentStage) {
                stage.classList.add("active");
            } else {
                stage.classList.remove("active");
            }
        });
    }
});
        