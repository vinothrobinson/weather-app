import { apiKey } from "./apiKey";

async function getWeather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=93b4b840f9da481fb69144750230209&q=mississauga", {mode: "cors"});
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeather();