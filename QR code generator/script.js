/*Init imgBox, qrImg and qrText*/
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

/*Function to generate the QR Code*/
function GenerateQR() {
    /*When click on generate, img src change to QR code API endpoint*/
    if (qrText.value.length > 0) { //At least one character to prevent img error when click on generate with an empty text field
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value; //Add the value of the text field as parameter
    imgBox.classList.add("show-img"); //Change the img box to show-img so it's display the generated QR code
    } else {
        qrText.classList.add('error'); //Change the qr text to error so it's display a shake animation
        setTimeout(()=>{
            qrText.classList.remove('error'); //Switch to vanilla class and remove the shaking animation
        }, 1000);
    }
}