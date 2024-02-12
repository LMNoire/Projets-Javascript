/*Init number var with id*/
let number = document.getElementById("number");
/*Init counter var to zero*/
let counter = 0;

setInterval(() => {
    /*If counter under 100%, display its value to #number into HTML*/
    if (counter == 100) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";    
    }

}, 20);