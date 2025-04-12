const goToTopButton = document.getElementById("to-top-button");

/* can write logs to console to debug code */
console.log(goToTopButton)

/* callback function referencing new function */
window.onscroll = ()=>{
    scrollFunction();
}

/* custom function */
function scrollFunction(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        goToTopButton.style.display = "block";
    }else{
        goToTopButton.style.display = "none";
    }
}

goToTopButton.onclick=()=>{
    window.scroll({
        top:0,
        behavior: "smooth",
    })
}