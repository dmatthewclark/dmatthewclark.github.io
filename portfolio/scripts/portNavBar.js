const complete = document.getElementById("complete");
const current = document.getElementById("current");
const assets = document.getElementById("assets");

const completeButton = document.getElementById("complete-button");
const currentButton = document.getElementById("current-button");
const assetsButton = document.getElementById("assets-button");

completeButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + complete.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

currentButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + current.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

assetsButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + assets.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}