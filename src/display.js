import { forecastInfo, hourlyInfo, nightTime, dayTime } from "./index.js"
import { dayIcons, nightIcons } from "./weatherIcons.js"

function displayDaily() {
    let dailyWeather = document.querySelector(".forecast")
    let days = dailyWeather.children
    for (let i = 0; i < days.length; i++) {
        days[i].querySelector(".day").textContent = forecastInfo[i].day
        days[i].querySelector(".maxTemp").textContent = forecastInfo[i].max_temp
        days[i].querySelector(".minTemp").textContent = forecastInfo[i].min_temp
        days[i].querySelector(".weather").textContent = forecastInfo[i].weather
        days[i].querySelector("img").src = dayIcons[forecastInfo[i].weather]
    }
}

let switchScreen = document.querySelector(".buttons").children;
switchScreen[0].addEventListener("click", function(){
    let counter = 0
    displayHourly(counter)
})

switchScreen[1].addEventListener("click", function(){
    let counter = 8
    displayHourly(counter)
})

switchScreen[2].addEventListener("click", function(){
    let counter = 16
    displayHourly(counter)
})

function displayHourly(counter) {
    let hourlyWeather = document.querySelector(".hourly")
    let hours = hourlyWeather.children
    console.log(dayTime)
    console.log(nightTime)
    for (let i = 0; i < hours.length; i++) {
        hours[i].querySelector(".hour").textContent = hourlyInfo[counter].time
        hours[i].querySelector(".temp").textContent = hourlyInfo[counter].temp
        hours[i].querySelector(".weather").textContent = hourlyInfo[counter].weather
        
        if (counter <= dayTime || counter > nightTime) {
            hours[i].querySelector("img").src = nightIcons[hourlyInfo[counter].weather]
        } else {
            hours[i].querySelector("img").src = dayIcons[hourlyInfo[counter].weather]
        }
        
        counter++;
    }
}

let changeType = document.querySelector(".change-forecast");
changeType.addEventListener("click", function(){
    let currentDisplay = document.querySelector(".currentDisplay")
    if (currentDisplay.textContent === "Daily Forecast"){
        currentDisplay.textContent = "Hourly Forecast"
        document.querySelector(".forecast").style.display = "none";
        document.querySelector(".hourly").style.display = "flex";
        document.querySelector(".buttons").style.display = "flex";
        changeType.textContent = "Change To Daily"
    } else {
        currentDisplay.textContent = "Daily Forecast"
        document.querySelector(".forecast").style.display = "flex";
        document.querySelector(".hourly").style.display = "none";
        document.querySelector(".buttons").style.display = "none";
        changeType.textContent = "Change To Hourly"
    }
})
export {displayDaily, displayHourly};