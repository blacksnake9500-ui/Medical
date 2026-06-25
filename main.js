const katolog = document.querySelector(".katolog")
const nav_info = document.querySelector(".nav_info")

katolog.addEventListener("mouseenter", () => {
    nav_info.style.display = "block"
    nav_info.style = z-index(999)
})

nav_info.addEventListener("mouseleave", () => {
    nav_info.style.display = "none"
})


const images = [
    "/imgs/hero img1.png",
    "/imgs/hero img2.png",
    "/imgs/hero img3.jpg"
];

const hero_img = document.querySelector(".hero_img");
let i = 0;

setInterval(() => {
    hero_img.style.opacity = "0";

    setTimeout(() => {
        i = (i + 1) % images.length;
        hero_img.src = images[i];
        hero_img.style.opacity = "1";
    }, 400);
}, 3000);   