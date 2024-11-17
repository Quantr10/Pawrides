document.addEventListener("DOMContentLoaded", () => {
    // Sample data: Choose one of the following rideRequest. Replace this with live data from a server or API later
    // const rideRequest = {
    //     currentStage: null, 
    //     history: [], // Empty array if no trip history
    // };

    const rideRequest = {
        currentStage: "Driver on the Way",
        history: [
            { date: "2024-11-15", from: "Union Building", to: "Walmart" },
        ],
    };

    const noRequestMessage = document.getElementById("no-request");
    const statusStages = document.getElementById("status-stages");

    // Update Ride Status
    if (!rideRequest.currentStage) {
        // No request: Show "No request yet" and hide status stages
        noRequestMessage.classList.remove("hidden");
        statusStages.classList.add("hidden");
    } else {
        // There is a request: Show status stages and hide "No request yet"
        noRequestMessage.classList.add("hidden");
        statusStages.classList.remove("hidden");

        // Highlight current stage
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
