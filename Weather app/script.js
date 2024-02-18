/*Declare API key as const*/
const apiKey = "fb4cd109577ed95790c812e117565609";
/*Declare API url as const*/
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
/*Declare the input field, search button and weather icons as const*/
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

/*Async function to check the weather*/
async function checkWeather(city) {
    /*Await for city value*/
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    /*If no city found display error div instead of weather*/
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        /*If status 2xx await for json response*/
        var data = await response.json();

        /*Display weather data in HTML elements*/
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

            /*Change the weather icon according to weather*/
            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "assets/clouds.png";
            } 
            else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "assets/clear.png";
            } 
            else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "assets/rain.png";
            } 
            else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "assets/drizzle.png";
            } 
            else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "assets/mist.png";
            } 
        
        /*Display weather div instead of error*/
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

/*On click call the checkWeather function*/
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


