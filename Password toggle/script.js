/*Init var eyeIcon and password*/
let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

/*On click event*/
eyeIcon.onclick = function() {

    /*If password type*/
    if (password.type == "password") {
        password.type = "text"; //Change to text so it's visible
        eyeIcon.src = "eye-open.png"; //Change image to an open eye

    } else {
        password.type = "password"; //Change to password so it's hide
        eyeIcon.src = "eye-close.png"; //Change image to a closed eye
    }
}