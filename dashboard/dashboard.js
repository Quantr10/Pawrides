document.addEventListener("DOMContentLoaded", () => {
    // Example data: Replace with live data
    const upcomingRides = [
        {
            id: 1,
            from: "Union Building",
            to: "Walmart",
            date: "2024-11-20",
            time: "10:00 AM",
            numpassenger: 1,
            currentStage: "Driver Assigned",
        },
        {
            id: 2,
            from: "Roy O' West",
            to: "Indianapolis Airport",
            date: "2024-11-21",
            time: "2:00 PM",
            numpassenger: 3,
            currentStage: "Submitted",
        },
    ];

    //const upcomingRides = []; // Empty array indicates no upcoming rides

    const ridesList = document.getElementById("rides-list");
    const noRidesMessage = document.getElementById("no-rides-message");
    const rideStatusSection = document.getElementById("ride-status");

    // Handle Upcoming Rides
    if (upcomingRides.length === 0) {
        // No rides: Show the "No upcoming rides" message
        noRidesMessage.classList.remove("hidden");
        ridesList.classList.add("hidden");
        rideStatusSection.classList.add("hidden"); // Hide ride status
    } else {
        // Populate Upcoming Rides
        noRidesMessage.classList.add("hidden");
        ridesList.classList.remove("hidden");

        upcomingRides.forEach(ride => {
            const listItem = document.createElement("li");
            listItem.textContent = `From: ${ride.from}, To: ${ride.to} (Date: ${ride.date})`;
            listItem.dataset.rideId = ride.id; // Attach ride ID for tracking
            listItem.addEventListener("click", () => showRideStatus(ride));
            ridesList.appendChild(listItem);
        });
    }

    // Function to Show Ride Status
    function showRideStatus(ride) {
        // Populate ride details
        document.getElementById("trip-from").textContent = ride.from;
        document.getElementById("trip-to").textContent = ride.to;
        document.getElementById("trip-date").textContent = ride.date;
        document.getElementById("trip-time").textContent = ride.time;
        document.getElementById("trip-numpassengers").textContent = ride.numpassenger; 
        // Show ride status section
        rideStatusSection.classList.remove("hidden");

        // Highlight the current stage
        const stages = Array.from(document.querySelectorAll(".status-stage"));
        stages.forEach(stage => {
            if (stage.textContent === ride.currentStage) {
                stage.classList.add("active");
            } else {
                stage.classList.remove("active");
            }
        });
    }
});
