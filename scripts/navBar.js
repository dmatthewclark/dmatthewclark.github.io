const pageNavBar = document.getElementById("page-nav");

const topButton = document.getElementById("top-button");

const dropDownButton = document.getElementById("drop-down-button");
const dropDownIcon = document.getElementById('drop-down-icon');

const topButtonIcon = document.getElementById("top-button-icon");
const mainNavBar = document.getElementById("main-nav");
const navigationButton = document.getElementById("navigation-button");
const navText = document.getElementsByClassName("nav-text");
const mainNavText = document.getElementsByClassName("main-nav-text");

var navOpen = false;
/* can write logs to console to debug code */

topButton.onclick=()=>{
    window.scroll({
        top:0,
        behavior:"smooth",
    });
}

dropDownButton.addEventListener('click', function(){
    if(window.getComputedStyle(pageNavBar).getPropertyValue('top') === '50px'){
        dropDownIcon.style.animation = "rotateDown 0.5s";
        dropDownIcon.style.transform = "rotate(90deg)";
        pageNavBar.style.animation = "slideUp 0.5s";
        pageNavBar.style.top = '0px';
    }else{
        dropDownIcon.style.animation = "rotateUp 0.5s";
        dropDownIcon.style.transform = "rotate(-90deg)";
        pageNavBar.style.animation = "slideDown 0.5s";
        pageNavBar.style.top = '50px';
    }
})

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
        mainNavBar.style.animation = "mainSlideUp 1s";
        mainNavBar.style.maxWidth = "100vw";
        updateNavBar();
    }else{ // navigation menu is open
        navOpen = true;
        mainNavBar.style.animation = "mainSlideDown 1s";
        mainNavBar.style.maxWidth = "150px";
        updateNavBar();
    }
})

/* callback function referencing new function */
window.onscroll = ()=>{
    scrollFunction();
}

/* custom function */
function scrollFunction(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        topButtonIcon.style.visibility = "visible";
    }else{
        topButtonIcon.style.visibility = "hidden";
    }
    if(document.body.scrollTop > window.innerHeight - 100 || document.documentElement.scrollTop > window.innerHeight - 100){
        dropDownIcon.style.visibility = "visible";
        console.log("true");
    }else{
        dropDownIcon.style.visibility = "hidden";
        console.log("false");
    }
}

