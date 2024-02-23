/*Init password, message and strenght var with ID*/
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

/*On input display results*/
pass.addEventListener('input', () => {

    if(pass.value.length > 0) {
        /*Display message if password typed*/
        msg.style.display = "block";
    } else {
        /*Message is not displayed if no password typed*/
        msg.style.display = "none";
    }

    /*Weak password under 4*/
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925"
    } 
    /*Medium password between 4 and 8*/
    else if(pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow"
    } 
    /*Strong password over 8*/
    else if(pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730"
    }
})