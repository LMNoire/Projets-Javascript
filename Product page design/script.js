/*Init productImg and btn var by getting elements from HTML*/
let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

/*On click on first button*/
btn[0].onclick = function() {
    /*Display image 1*/
    productImg.src = "assets/image1.jpg";

    /*Remove active class for all buttons except selected one*/
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

/*On click on second button*/
btn[1].onclick = function() {
    /*Display image 2*/
    productImg.src = "assets/image2.jpg";

    /*Remove active class for all buttons except selected one*/
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

/*On click on third button*/
btn[2].onclick = function() {
    /*Display image 3*/
    productImg.src = "assets/image3.jpg";

    /*Remove active class for all buttons except selected one*/
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}