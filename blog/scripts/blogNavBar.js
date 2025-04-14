const general = document.getElementById("general");
const hobbies = document.getElementById("hobbies");
const events = document.getElementById("events");

const generalButton = document.getElementById("general-button");
const hobbiesButton = document.getElementById("hobbies-button");
const eventsButton = document.getElementById("events-button");

generalButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + general.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

hobbiesButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + hobbies.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

eventsButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + events.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}