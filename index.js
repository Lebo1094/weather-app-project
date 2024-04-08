import axios from "axios";

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  function showWeather(response) {
    let temperatureElement = document.querySelector("#temp-value");
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
  }
  let apiKey = "fd465o10bb292abbf346etb26bb03720";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement.innerHTML}
&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
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

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
