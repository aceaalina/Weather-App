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

  for (let i = 0; i < 7; i++) {
    let dayIndex = (today.getDay() + i) % 7;
    weekDays.push(daysOfWeek[dayIndex]);
  }

  return weekDays;
}

function roundTemperature(temp) {
  if (temp % 1 === 0.5) {
    return Math.ceil(temp);
  }
  return Math.round(temp);
}

function showWeekWeather(weatherData) {
  const nextWeekDays = getNextWeekDays();
  let cardsList = "";
  let currentDate = new Date().toDateString();

  for (let i = 0; i < weatherData.list.length; i += 1) {
    const curentWeather = weatherData.list[i];
    const dateTime = new Date(curentWeather.dt_txt);
    const dayName =
      nextWeekDays[(dateTime.getDay() - new Date().getDay() + 7) % 7];
    const isToday = dateTime.toDateString() === currentDate;

    if (i % 8 === 0) {
      if (i !== 0) {
        cardsList += `</div></div>`; // Close previous day card
      }
      cardsList += `<div class="day-card"><h3>${
        isToday ? "Today" : dayName
      }</h3><div class="hour-cards-container">`;
    }

    const iconCode = curentWeather.weather[0].icon;
    const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    cardsList += `
      <div class="hour-card">
           <p>Ora: ${dateTime.getHours()}:00</p>
           <img src="${iconImageUrl}"/>
           <p>Temp: ${roundTemperature(curentWeather.main.temp)}</p>
           <p>Descr: ${curentWeather.weather[0].main}</p>
           <p>Minima: ${roundTemperature(curentWeather.main.temp_min)}</p>
           <p>Maxima: ${roundTemperature(curentWeather.main.temp_max)}</p>
           <p>Umiditate: ${curentWeather.main.humidity}</p>
      </div>
    `;
  }

  cardsList += `</div></div>`;
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
    <p class="temperatura">Temperatura curenta: ${roundTemperature(
      weatherDate.main.temp
    )}</p>
    <p>Maxima zilei: ${roundTemperature(weatherDate.main.temp_max)} </p>
    <p>Minima zilei: ${roundTemperature(weatherDate.main.temp_min)}</p>
  </div>
  `;
}
