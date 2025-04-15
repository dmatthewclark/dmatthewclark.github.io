const general = document.getElementById("general");
const hobbies = document.getElementById("hobbies");
const travel = document.getElementById("travel");

const generalButton = document.getElementById("general-button");
const hobbiesButton = document.getElementById("hobbies-button");
const travelButton = document.getElementById("travel-button");

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

travelButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + travel.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}