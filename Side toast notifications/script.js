/*Init toastBox var with hidden div*/
let toastBox = document.getElementById('toastBox');

/*Init success, error and invalid messages with fontawesome icons*/
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

/*Show message function*/
function showToast(msg) {
    /*Create the display div and add toast class + message*/
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    /*If error, change to error class with specific css*/
    if (msg.includes('error')) {
        toast.classList.add('error');
    }

    /*If invalid, change to error class with specific css*/
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    /*Set a 6 seconds timeout*/
    setTimeout(() => {
        toast.remove();
    }, 6000);

}