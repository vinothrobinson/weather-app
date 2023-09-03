import { apiKey } from "./apiKey";
import { displayDaily } from "./display";

let currentCity = "MISSISSAUGA"
export let forecastInfo = [];
export let hourlyInfo = [];

// This object holds the info needed for daily weather (for a 3 day forecast)
class WeatherDaily {
    constructor(day, max_temp, min_temp, weather) {
        this.day = day;
        this.max_temp = max_temp;
        this.min_temp = min_temp;
        this.weather = weather
    }
}

// This object holds the info needed for daily weather (for a 3 day forecast)
class WeatherHourly {
    constructor(time, temp, weather) {
        this.time = time;
        this.temp = temp;
        this.weather = weather
    }
}
// Lists for days and hours
const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const hours = [
    "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM",
]

// This function retrieves information regarding the weather of the specified city
async function getWeatherForecast() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=3`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  let forecastList = weatherData.forecast.forecastday;
  forecastInfo = [];
  for (let i = 0; i < forecastList.length; i++) {
    let day = week[(new Date(forecastList[i].date)).getDay()]
    let max_temp = forecastList[i].day.maxtemp_c + " °C";
    let min_temp = forecastList[i].day.mintemp_c + " °C";
    let weather = forecastList[i].day.condition.text
    let weatherDaily = new WeatherDaily(day, max_temp, min_temp, weather)
    forecastInfo.push(weatherDaily);
  }
  console.log(forecastInfo)
  displayDaily();
}

// Get Hourly Weather For The Current Day
async function getWeatherHourly() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=3`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    console.log(weatherData);
    let forecastList = weatherData.forecast.forecastday[0].hour;
    hourlyInfo = [];
    for (let i = 0; i < forecastList.length; i++) {
      let time = hours[(new Date(forecastList[i].time)).getHours()]
      let temp = forecastList[i].temp_c + " °C";
      let weather = forecastList[i].condition.text
      let weatherHourly = new WeatherHourly(time, temp, weather);
      hourlyInfo.push(weatherHourly);
    }
    console.log(hourlyInfo)
    // displayDaily();
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
    getWeatherForecast();
    getWeatherHourly();
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