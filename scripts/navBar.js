const pageNavBar = document.getElementById("page-nav");

const topButton = document.getElementById("top-button");

const dropDownButton = document.getElementById("drop-down-button");
const dropDownIcon = document.getElementById('drop-down-icon');

const topButtonIcon = document.getElementById("top-button-icon");

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