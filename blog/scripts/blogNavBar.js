const general = document.getElementById("general");
const volleyball = document.getElementById("volleyball");
const travel = document.getElementById("travel");

const generalButton = document.getElementById("general-button");
const volleyballButton = document.getElementById("volleyball-button");
const travelButton = document.getElementById("travel-button");

generalButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + general.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

volleyballButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + volleyball.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

travelButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + travel.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}