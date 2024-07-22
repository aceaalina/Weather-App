const showWeatherBtn = document.getElementById("show-weather");
const cityInput = document.getElementById("city");
const weatherContainer = document.getElementById("weather-container");
const weatherDays = document.getElementById("weather-days");

showWeatherBtn.addEventListener("click", getData);

const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

async function getCurrentWeather(city) {
  const response = await fetch(`${URL_CURRENT_WEATHER}${city}`);
  const curentWeather = await response.json();
  return curentWeather;
}

async function getForecastWeather(city) {
  const response = await fetch(`${URL_FORECAST_WEATHER}${city}`);
  const forecastWeather = await response.json();
  return forecastWeather;
}

async function getData() {
  const city = cityInput.value;
  const curentWeather = await getCurrentWeather(city);

  showWeather(curentWeather);

  const forecastWeather = await getForecastWeather(city);

  showWeekWeather(forecastWeather);
}

function getNextWeekDays() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  let weekDays = [];

  for (let i = 0; i < 5; i++) {
    let dayIndex = (today.getDay() + i) % 5;
    weekDays.push(daysOfWeek[dayIndex]);
  }

  return weekDays;
}

function showWeekWeather(weatherDate) {
  const nextWeekDays = getNextWeekDays();
  let cardsList = " ";

  for (let i = 0; i < nextWeekDays.length; i++) {
    const curentWeather = weatherDate.list[i * 8];
    console.log(curentWeather);
    const iconCode = curentWeather.weather[0].icon;
    const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    cardsList += `
      <div id="card-${i}">
           <p> ${nextWeekDays[i]}</p>
           <img src="${iconImageUrl}"/>
           <p>Temperatura curenta: ${curentWeather.main.temp}</p>
           <p>Descriere: ${curentWeather.weather[0].main}</p>
           <p>Minima zilei: ${curentWeather.main.temp_min}</p>
           <p>Maxima zilei: ${curentWeather.main.temp_max}</p>
           <p>Temperatura resimtita: ${curentWeather.main.feels_like}</p>
           <p>Umiditate: ${curentWeather.main.humidity}</p>
           
          
      </div>
    `;
  }
  weatherDays.innerHTML = cardsList;
}

function showWeather(weatherDate) {
  const iconCode = weatherDate.weather[0].icon;
  const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  weatherContainer.innerHTML = `
  <div class="current-weather">
    <img src="${iconImageUrl}"/>
    <p>Descriere: ${weatherDate.weather[0].description}</p>
    <p>Umiditate: ${weatherDate.main.humidity}</p>
    <p>Presiune: ${weatherDate.main.pressure}</p>
    <p class="temperatura">Temperatura curenta: ${weatherDate.main.temp}</p>
    <p>Maxima zilei: ${weatherDate.main.temp_max} </p>
    <p>Minima zilei: ${weatherDate.main.temp_min}</p>
  </div>
  `;
}
