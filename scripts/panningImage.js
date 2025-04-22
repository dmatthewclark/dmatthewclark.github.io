const container = document.getElementById('page-top');
const panningImage = document.getElementById('panning-image');

/* callback function referencing new function */
window.onscroll = ()=>{
    panningFunction();
}

function panningFunction(){
    let overflowY = panningImage.clientHeight - container.clientHeight;
    overflowY -= document.documentElement.scrollTop;
    if (overflowY > 0) {
        panningImage.style.transform = "translateY(" + -document.documentElement.scrollTop + "px)";
    }
}

window.addEventListener('resize', panningFunction);
panningImage.addEventListener('load', panningFunction);