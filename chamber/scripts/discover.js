// ==========================================
// UYO CHAMBER OF COMMERCE
// Discover Page Script
// WDD 231
// ==========================================

import { discoverItems } from "../data/discover.mjs";

const discoverGrid = document.querySelector("#discoverGrid");
const visitorMessage = document.querySelector("#visitorMessage");

// Render the 8 discover cards
const displayDiscoverItems = (items) =>{

    discoverGrid.innerHTML = "";

    items.forEach((item,index) =>{

        const card = document.createElement("section");
        card.classList.add("discover-card");
        card.style.gridArea = `item${index + 1}`;

        card.innerHTML = `
            <h2>${item.name}</h2>

            <figure>
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                    width="300"
                    height="200">
            </figure>

            <address>${item.address}</address>

            <p>${item.description}</p>

            <button type="button" class="learn-more-btn">
                Learn More
            </button>
        `;

        discoverGrid.appendChild(card);

    });

};

// Determine and display the visitor message based on localStorage
const displayVisitorMessage = () =>{

    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();

    let message = "";

    if(!lastVisit){

        message = "Welcome! Let us know if you have any questions.";

    }else{

        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysSinceLastVisit = Math.floor((currentVisit - Number(lastVisit)) / millisecondsPerDay);

        if(daysSinceLastVisit < 1){

            message = "Back so soon! Awesome!";

        }else if(daysSinceLastVisit === 1){

            message = "You last visited 1 day ago.";

        }else{

            message = `You last visited ${daysSinceLastVisit} days ago.`;

        }

    }

    visitorMessage.textContent = message;

    localStorage.setItem("lastVisit",currentVisit);

};

// Initialize page
displayDiscoverItems(discoverItems);
displayVisitorMessage();
