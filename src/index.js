import { apiKey } from "./apiKey";
import { displayDaily } from "./display";


const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let currentCity = "MISSISSAUGA"
export let forecastInfo = [];

// This object holds the info needed for daily weather (for a 3 day forecast)
class WeatherDaily {
    constructor(day, max_temp, min_temp, weather) {
        this.day = day;
        this.max_temp = max_temp;
        this.min_temp = min_temp;
        this.weather = weather
    }
}

// This function retrieves information regarding the weather of the specified city
async function getWeather() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=3`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData.forecast);
  let forecastList = weatherData.forecast.forecastday;
  forecastInfo = [];
  for (let i = 0; i < forecastList.length; i++) {
    let day = week[(new Date(forecastList[i].date)).getDay()]
    let max_temp = forecastList[i].day.maxtemp_c + " °C";
    let min_temp = forecastList[i].day.mintemp_c + " °C";
    let weather = forecastList[i].day.condition.text
    let weatherDaily = new WeatherDaily(day, max_temp, min_temp, weather)
    // weatherInfo.push(week[date.getDay()])
    forecastInfo.push(weatherDaily);
  }
  console.log(forecastInfo)
  displayDaily();
}

document.querySelector("#new-city-form").addEventListener("submit", function(event) {
    event.preventDefault();
    changeCity();
})

// This function changes the city
function changeCity() {
    currentCity = document.querySelector("#city").value
    currentCity.toUpperCase()
    document.querySelector("#new-city-form").reset()
    displayCity()
}

// This function displays the new city name and gets the data from WeatherAPI
function displayCity() {
    document.querySelector(".city-name").textContent = currentCity;
    getWeather()
}

displayCity();

// This prevents a notification to pop up after refreshing the screen
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

// Testing API
  /*
  console.log(weatherData)
  console.log(weatherData.forecast);
  let date = new Date(weatherData.forecast.forecastday[0].date)
  console.log(week[date.getDay()])
  console.log(weatherData.forecast.forecastday[0].day.avgtemp_c);
  console.log(weatherData.forecast.forecastday[0].day.condition.text);

  let date1 = new Date(weatherData.forecast.forecastday[1].date)
  console.log(week[date1.getDay()])
  console.log(weatherData.forecast.forecastday[1].day.avgtemp_c);
  console.log(weatherData.forecast.forecastday[1].day.condition.text);

  let date2 = new Date(weatherData.forecast.forecastday[2].date)
  console.log(week[date2.getDay()])
  console.log(weatherData.forecast.forecastday[2].day.avgtemp_c);
  console.log(weatherData.forecast.forecastday[2].day.condition.text);
  */