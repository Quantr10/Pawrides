import { db } from "../firebase-config.js"; // Ensure this is correct
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
    const ridesList = document.getElementById("rides-list");
    const noRidesMessage = document.getElementById("no-rides-message");
    const rideStatusSection = document.getElementById("ride-status");

    // Fetch rides from Firestore
    async function fetchRidesFromDB() {
        try {
            const ridesCollection = collection(db, "rides-request");
            const snapshot = await getDocs(ridesCollection);
            const rides = [];
            snapshot.forEach((doc) => {
                rides.push({ id: doc.id, ...doc.data() });
            });
            return rides;
        } catch (error) {
            console.error("Error fetching rides:", error);
            return [];
        }
    }

    async function renderRides() {
        const upcomingRides = await fetchRidesFromDB();

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

            upcomingRides.forEach((ride) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${ride.pickup} to ${ride.dropoff} on ${ride.date}`;
                listItem.dataset.rideId = ride.id; // Attach ride ID for tracking
                listItem.addEventListener("click", () => showRideStatus(ride));
                ridesList.appendChild(listItem);
            });
        }
    }

    // Function to Show Ride Status
    function showRideStatus(ride) {
        // Populate ride details
        document.getElementById("trip-from").textContent = ride.pickup || "N/A";
        document.getElementById("trip-to").textContent = ride.dropoff || "N/A";
        document.getElementById("trip-date").textContent = ride.date || "N/A";
        document.getElementById("trip-time").textContent = ride.time || "N/A";
        document.getElementById("trip-numpassengers").textContent = ride.numpassenger || "N/A";

        // Show ride status section
        rideStatusSection.classList.remove("hidden");

        // Highlight the current stage (default is "Submitted")
        const stages = Array.from(document.querySelectorAll(".status-stage"));
        stages.forEach((stage) => {
            if (stage.textContent === (ride.currentStage || "Submitted")) {
                stage.classList.add("active");
            } else {
                stage.classList.remove("active");
            }
        });
    }

    // Initialize the dashboard
    renderRides();
});
