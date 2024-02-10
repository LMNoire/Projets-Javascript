/*Init const passwordBox*/
const passwordBox = document.getElementById("password");
/*Init const lenght of the password*/
const lenght = 12;

/*Init const with characters used to generate password*/
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]></-=";

/*Init const with all characters const combined*/
const allChars = upperCase + lowerCase + number + symbol;

/*Create password function*/
function createPassword() {
    let password = "";
    /*Generate random number of each const and add them to password var*/
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    /*While password lenght is > to lenght const*/
    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    /*Display generated password into input box*/
    passwordBox.value = password;
    }

/*Copy generated password function*/
function copyPassword() {
    /*Init const passwordBox*/
    const passwordBox = document.getElementById("password");
        /*Select the generated password input field*/
        passwordBox.select();
    
        try {
            /*Copy the value in the clipboard*/
            navigator.clipboard.writeText(passwordBox.value);
            console.log('Password copied to clipboard');
        } catch (err) {
            console.error('Failed to copy password: ', err);
        }
    }
