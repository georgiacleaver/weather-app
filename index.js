let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;

let newCity = document.querySelector("h5");

function displayCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  console.log(searchCity.value);
  newCity.innerHTML = `${searchCity.value}`;
  let apiKey = "57e6ab966e464ee1a26a0e176ff45d82";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", displayCity);

//

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let message = `${temperature}°C`;
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = message;
}
