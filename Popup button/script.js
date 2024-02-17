/*Init popup with get element by id*/
let popup = document.getElementById("popup");

/*Open popup function*/
function openPopup() {
    /*When called, change popup class and change visibily and start animation*/
    popup.classList.add("open-popup");
}

/*Close popup function*/
function closePopup() {
    /*When called, remove the open-popup class then hide the popup*/
    popup.classList.remove("open-popup");
}