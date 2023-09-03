import { apiKey } from "./apiKey";

async function getWeather() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=mississauga`, {mode: "cors"});
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeather();