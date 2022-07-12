let skewed = document.querySelector(".angel");

window.addEventListener("scroll", function () {
    let value = -10 + window.scrollY / 60;
    1;
    skewed.style.transform = "skewY(" + value + "deg)";
});
