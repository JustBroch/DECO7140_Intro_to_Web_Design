import { fetchGetData } from "./modules/getData.js";
/* Evt om jeg skal ha accordion.js her */
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
 * */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("community-list");

    fetchGetData(
        "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/",
        {
            student_number: "s4908436",
            uqcloud_zone_id: "29b86239",
        }
    ).then((data) => {
        if (!data) {
            container.innerHTML =
                "<p>Unable to load community data. Please try again later.</p>";
            return;
        }

        if (data.length === 0) {
            container.innerHTML = "<p>No community members found yet.</p>";
            return;
        }

        data.forEach((member) => {
            const card = document.createElement("div");
            card.className = "card mb-3";
            card.innerHTML = `
            <article class="community-card">
                ${
                    member.photo
                        ? `<img src="${member.photo}" alt="Photo of ${member.name}" class="community-photo">`
                        : ""
                }
                <div class="community-info">
                    <h3 class="community-name">${member.name}</h3>
                    <p class="community-message">${
                        member.message || "No message provided."
                    }</p>
                </div>
            </article>
        `;

            container.appendChild(card);
        });
    });
});

// when the page fully loads
