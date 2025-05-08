const mainNavBar = document.getElementById("main-nav");
const navigationButton = document.getElementById("navigation-button");
const navigationButtonIcon = document.getElementById("nav-button-icon");
const navText = document.getElementsByClassName("nav-text");
const mainNavText = document.getElementsByClassName("main-nav-text");

var navOpen = false;
/* can write logs to console to debug code */


function updateNavBar() {
    if(window.innerWidth > 575){
        for (let i = 0; i < navText.length; i++) {
            var ele = navText[i];

            ele.style.display = "flex";
            ele.style.position = "static";
        }
    }else{
        for (let i = 0; i < navText.length; i++) {
            var ele = navText[i];

            ele.style.display = "none";
            ele.style.position = "none";
        }
    }

    if(navOpen === true) {
        for (let i = 0; i < mainNavText.length; i++) {
            var ele = mainNavText[i];

            ele.style.display = "flex";
            ele.style.position = "static";
        }
    }else{
        if(window.innerWidth > 575){
            for (let i = 0; i < mainNavText.length; i++) {
                var ele = mainNavText[i];
    
                ele.style.display = "flex";
                ele.style.position = "static";
            }
        }else{
            for (let i = 0; i < mainNavText.length; i++) {
                var ele = mainNavText[i];
    
                ele.style.display = "none";
                ele.style.position = "none";
            }
        }
    }
}

updateNavBar();
window.addEventListener("resize", updateNavBar);

navigationButton.addEventListener('click', function(){
    if(navOpen === true){
        navOpen = false;
        mainNavBar.style.flexDirection = "row";
        mainNavBar.style.alignItems = "center";
        mainNavBar.style.paddingTop = "0px";
        mainNavBar.style.paddingBottom = "0px";
        mainNavBar.style.animation = "mainHeightShrink 1s";
        mainNavBar.style.height = "50px";
        mainNavBar.style.zIndex = "10";
        navigationButtonIcon.style.animation = "rotate90 1s";
        navigationButtonIcon.style.transform = "rotate(0deg)";
        navigationButton.style.marginLeft = "0px";
        navigationButton.style.marginRight = "0px";
        updateNavBar();
    }else{ // navigation menu is open
        navOpen = true;
        mainNavBar.style.flexDirection = "column";
        mainNavBar.style.alignItems = "flex-start";
        mainNavBar.style.paddingTop = "20px";
        mainNavBar.style.paddingBottom = "20px";
        mainNavBar.style.animation = "mainHeightExpand 0.2s";
        mainNavBar.style.height = "300px";
        mainNavBar.style.zIndex = "12";
        navigationButtonIcon.style.animation = "rotate-90 1s";
        navigationButtonIcon.style.transform = "rotate(-90deg)";
        navigationButton.style.marginLeft = "auto";
        navigationButton.style.marginRight = "auto";
        updateNavBar();
    }
})

