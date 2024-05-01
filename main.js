const slider = document.querySelector("#slider");
const dots = document.querySelectorAll("#dots .dot");

let lastIndex = 0;
slider.addEventListener("scroll", () => {
    const index = Math.round(slider.scrollLeft / window.innerWidth);
    if (index === lastIndex) {
        return false;
    }
    lastIndex = index;
    document.querySelector("#dots .dot.active")?.classList.remove("active");
    dots[index].classList.add("active");
}, { passive: true });