let now = new Date ();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];

let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
  
let h3 = document.querySelector("h3");
h3.innerHTML = ` ${day} ${month} ${date} ${hours}:${minutes},${year} `;

function search(city){
    let apiKey = "0fa5338feee37a23dfae3b92287d5078";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature); 
    }

function searchCity(event){
    event.preventDefault();
let cityElement = document.querySelector("#city");
let cityInput = document.querySelector("#city-input");
cityElement.innerHTML = cityInput.value;
search(cityInput.value);

}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function showTemperature(response){
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#temperature");
let temperatureDescription = document.querySelector("#temperature-description");
temperatureElement.innerHTML = `${temperature}`;
temperatureDescription.innerHTML = response.data.weather[0].description;

}







