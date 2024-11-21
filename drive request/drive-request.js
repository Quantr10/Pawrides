import { db } from "../firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("drive-request");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Capture form data
        const formData = {
            name: document.getElementById("name").value.trim(),
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            email: document.getElementById("email").value.trim(),
            pickup: document.getElementById("pickup").value,
            dropoff: document.getElementById("dropoff").value,
            phone: document.getElementById("phone").value.trim(),
            numpassenger: document.querySelector("input[name='numpassenger']:checked")?.value,
            note: document.getElementById("note").value.trim(),
        };

        console.log("Captured Form Data:", formData); // Debugging log

        // Check if required fields are filled
        if (!formData.name || !formData.date || !formData.time || !formData.email || !formData.pickup || !formData.dropoff || !formData.phone || !formData.numpassenger) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            // Add data to Firestore
            await addDoc(collection(db, "rides-request"), formData);
            alert("Ride request submitted successfully!");
            form.reset(); // Reset form after submission
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to submit ride request.");
        }
    });
});
