const psychology = document.getElementById("psychology");
const neuroscience = document.getElementById("neuroscience");
const behaviour = document.getElementById("behaviour");

const psychologyButton = document.getElementById("psychology-button");
const neuroscienceButton = document.getElementById("neuroscience-button");
const behaviourButton = document.getElementById("behaviour-button");

psychologyButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + psychology.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

neuroscienceButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + neuroscience.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

behaviourButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + behaviour.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}