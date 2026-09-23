console.log("script.js is connected") 
let msg1 = 1;
function handleRSVP() {
    if (msg1 == 1){
        const message = document.createElement("p");
        message.textContent = "You're on the list — see you there!";
        message.classList.add("feedback-message");
        const rsvpButton = document.getElementById("rsvpBtn");
        rsvpButton.after(message);
        msg1 = 2;
    }

}
let count = 4;
function rsvpCount() {
        const message = document.createElement("p");
        message.textContent = "Number: " + count;
        message.classList.add("count-message");
        const countButton = document.getElementById("countBtn");
        countButton.after(message);
        count += 1

}