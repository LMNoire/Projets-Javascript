/*Init scrollContainer var with gallery element from document*/
let scrollContainer = document.querySelector(".gallery");

/*Init back and next buttons var by id*/
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

/*When mouse hovering gallery*/
scrollContainer.addEventListener("wheel", (evt) => {
    /*Scroll with mouse*/
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

/*Next button on click*/
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

/*Back button on click*/
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= -900;
});