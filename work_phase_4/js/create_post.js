import { postFormData } from "./modules/postFormData.js";

/**
 * IMPORTS
 * Keep track of external modules being used
 * */

/**
 * CONSTANTS
 * Define values that don't change e.g. page titles, URLs, etc.
 * */

/**
 * VARIABLES
 * Define values that will change e.g. user inputs, counters, etc.
 * */

/**
 * FUNCTIONS
 * Group code into functions to make it reusable
 * */

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page

// when the page fully loads
 * */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("community-post-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const { success, data } = await postFormData(
            form,
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
            {
                student_number: "s4908436",
                uqcloud_zone_id: "29b86239",
            }
        );

        if (success) {
            feedback.textContent = data.message || "Successfully submitted!";
            form.reset();
        } else {
            feedback.textContent =
                data.message || "Something went wrong. Please try again.";
        }
    });
});
