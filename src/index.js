let now = new Date();
let hours = (now.getHours()<10?'0':'') + now.getHours();
let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDays[now.getDay()];

let date = document.querySelector("#date");
date.innerHTML = `<strong>${day}</strong> ${hours}:${minutes}`;

function getWeather(response) {
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#weather").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
    let apiKey = `aa80dfc499c569af8a15e578c09bbf2b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city").value;
    searchCity(city);
}

function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = `aa80dfc499c569af8a15e578c09bbf2b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(getWeather);
}

function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition); 

searchCity("Heilbronn");










