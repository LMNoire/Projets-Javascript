/*Init icon var by getting toggle theme button id*/
var icon = document.getElementById("icon");

/*Display light theme if no local storage theme item*/
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}

/*Init local data var with local storage theme item*/
let localData = localStorage.getItem("theme");

/*If light theme displayed*/
if (localData == "light") {
    /*Img become moon*/
    icon.src = "assets/moon.png";
    /*Body dark theme class is removed*/
    document.body.classList.remove("dark-theme");
} else if(localData == "dark") {
    /*If dark theme displayed, img become sun*/
    icon.src = "assets/sun.png";
    /*Dark theme class added to body*/
    document.body.classList.add("dark-theme");
}

/*On click on #icon button call anonymous function*/
icon.onclick = function() {
    /*Toggle body class*/
    document.body.classList.toggle("dark-theme");
    /*If dark theme displayed*/
    if(document.body.classList.contains("dark-theme")) {
        /*Img become sun*/
        icon.src = "assets/sun.png";
        /*Set local storage theme item to dark*/
        localStorage.setItem("theme", "dark");
    } else {
        /*Img become moon*/
        icon.src = "assets/moon.png";
        /*Set local storage theme item to light*/
        localStorage.setItem("theme", "light");
    }
}