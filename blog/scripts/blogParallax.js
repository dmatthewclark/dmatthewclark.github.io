const title = document.getElementById("title");

const setter = document.getElementById("setter");
const net = document.getElementById("net");
const hitter = document.getElementById("hitter");
const blockFemale = document.getElementById("block_female");
const blockMale = document.getElementById("block_male");
const sand = document.getElementById("sand");
const ball = document.getElementById("ball");

window.addEventListener("scroll", () => {
    let val = window.scrollY;

    title.style.bottom = `-${val * 1.2}px`;

    sand.style.bottom = `-${val * 0.2}px`;
    setter.style.bottom = `-${val * 0.25}px`;
    setter.style.left = `${val * 0.05}px`;
    hitter.style.bottom = `-${val * 0.1}px`;
    hitter.style.left = `${val * 0.05}px`;
    ball.style.bottom = `-${val * 0.3}px`;
    ball.style.left = `-${val * 0.1}px`;

    net.style.bottom = `-${val * 0.3}px`;

    blockFemale.style.bottom = `-${val * 0.25}px`;
    blockFemale.style.left = `${val * 0.01}px`;
    blockMale.style.bottom = `-${val * 0.25}px`;
    blockMale.style.right = `-${val * 0.03}px`;
    
});
