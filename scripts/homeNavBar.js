const about = document.getElementById("about");
const research = document.getElementById("research");
const development = document.getElementById("development");

const aboutButton = document.getElementById("about-button");
const researchButton = document.getElementById("research-button");
const developmentButton = document.getElementById("development-button");

aboutButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + about.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

researchButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + research.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}

developmentButton.onclick=()=>{
    window.scroll({
        top: window.scrollY + development.getBoundingClientRect().top - 100,
        behavior:"smooth",
    });
}