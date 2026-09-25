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
let bio = 1;
function handleBio() {
    if (bio == 1){
        const bioMessage = document.createElement("p");
        bioMessage.textContent = "John's name is John. He is a club officer. He won Club officer of the Month.";
        bioMessage.classList.add("john-message");
        const bioButton = document.getElementById("bioBtn");
        bioButton.after(bioMessage);
        bio = 2;
    }
}