

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city");
  let city = searchInputElement.value;

  function showWeather(response) {
    let temperatureElement = document.querySelector("#temp-value");
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
    cityElement.innerHTML = response.data.city;
  }
  let apiKey = "fd465o10bb292abbf346etb26bb03720";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
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

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-day");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
