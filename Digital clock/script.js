/*Init hrs, min and sec var with data from HTML id*/
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

    /*For each 1sec interval*/
    setInterval(() => {
        
        /*Set a new object date*/
        let currentTime = new Date();

        /*Display to HTML id each element of the clock. If under 10 display the zero in the front of the digit*/
        hrs.innerHTML = (currentTime.getHours() < 10?"0":"") + currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes() < 10?"0":"") + currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds() < 10?"0":"") + currentTime.getSeconds();
    
    }, 1000)

