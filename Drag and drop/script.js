/*Init lists var by getting elements with list class*/
let lists = document.getElementsByClassName("list");

/*Init rightBox and leftBox var by getting elements with right and left id*/
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

/*Loop for every list on lists items*/
for (list of lists) {

    /*When start drag item*/
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        /*Allow rightBox to get item*/
        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });

        /*Allow leftBox to get item*/
        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}