// ==========================================
// UYO CHAMBER OF COMMERCE
// Join Page Script
// WDD 231
// ==========================================

// Set hidden timestamp field to current date/time when page loads
const timestampField = document.querySelector("#timestamp");

if(timestampField){
    timestampField.value = new Date().toString();
}

// Modal open triggers
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>{

    trigger.addEventListener("click",() =>{

        const targetId = trigger.getAttribute("data-target");
        const modal = document.querySelector(`#${targetId}`);

        if(modal){
            modal.showModal();
        }

    });

});

// Modal close buttons
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalCloseButtons.forEach((closeButton) =>{

    closeButton.addEventListener("click",() =>{

        const modal = closeButton.closest("dialog");

        if(modal){
            modal.close();
        }

    });

});
