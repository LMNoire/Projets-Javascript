/*Init userInput var by getting date element*/
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
/*Init result var by getting result element*/
let result = document.getElementById("result");

/*Function to calculate age*/
function calculateAge() {
    /*Store user value in birthDate var*/
    let birthDate = new Date(userInput.value);

    /*Store birthDate date data into var*/
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    /*Store today date data into today var*/
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    /*Calculate the difference between dates*/
    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 -m1
    }
    if(d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}

/*Get days in month function*/
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}