import { forecastInfo } from "./index.js"

function displayDaily() {
    let dailyWeather = document.querySelector(".forecast")
    let days = dailyWeather.children
    for (let i = 0; i < days.length; i++) {
        days[i].querySelector(".day").textContent = forecastInfo[i].day
        days[i].querySelector(".maxTemp").textContent = forecastInfo[i].max_temp
        days[i].querySelector(".minTemp").textContent = forecastInfo[i].min_temp
        days[i].querySelector(".weather").textContent = forecastInfo[i].weather
    }
}

export {displayDaily};