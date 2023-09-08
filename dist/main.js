(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{xj:()=>d,Rz:()=>s,UV:()=>y,MW:()=>w});let t="93b4b840f9da481fb69144750230209";const n={Sunny:"./weather/64x64/day/113.png","Partly cloudy":"./weather/64x64/day/116.png",Cloudy:"./weather/64x64/day/119.png",Overcast:"./weather/64x64/day/122.png",Mist:"./weather/64x64/day/143.png","Patchy rain possible":"./weather/64x64/day/176.png","Patchy snow possible":"./weather/64x64/day/179.png","Patchy sleet possible":"./weather/64x64/day/182.png","Patchy freezing drizzle possible":"./weather/64x64/day/185.png","Thundery outbreaks possible":"./weather/64x64/day/200.png","Blowing snow":"./weather/64x64/day/227.png",Blizzard:"./weather/64x64/day/230.png",Fog:"./weather/64x64/day/248.png","Freezing fog":"./weather/64x64/day/260.png","Patchy light drizzle":"./weather/64x64/day/263.png","Light drizzle":"./weather/64x64/day/266.png","Freezing drizzle":"./weather/64x64/day/281.png","Heavy freezing drizzle":"./weather/64x64/day/284.png","Patchy light rain":"./weather/64x64/day/293.png","Light rain":"./weather/64x64/day/296.png","Moderate rain at times":"./weather/64x64/day/299.png","Moderate rain":"./weather/64x64/day/302.png","Heavy rain at times":"./weather/64x64/day/305.png","Heavy rain":"./weather/64x64/day/308.png","Light freezing rain":"./weather/64x64/day/311.png","Moderate or heavy freezing rain":"./weather/64x64/day/314.png","Light sleet":"./weather/64x64/day/317.png","Moderate or heavy sleet":"./weather/64x64/day/320.png","Patchy light snow":"./weather/64x64/day/323.png","Light snow":"./weather/64x64/day/326.png","Patchy moderate snow":"./weather/64x64/day/329.png","Moderate snow":"./weather/64x64/day/332.png","Patchy heavy snow":"./weather/64x64/day/335.png","Heavy snow":"./weather/64x64/day/338.png","Ice pellets":"./weather/64x64/day/350.png","Light rain shower":"./weather/64x64/day/353.png","Moderate or heavy rain shower":"./weather/64x64/day/356.png","Torrential rain shower":"./weather/64x64/day/359.png","Light sleet showers":"./weather/64x64/day/362.png","Moderate or heavy sleet showers":"./weather/64x64/day/365.png","Light snow showers":"./weather/64x64/day/368.png","Moderate or heavy snow showers":"./weather/64x64/day/371.png","Light showers of ice pellets":"./weather/64x64/day/374.png","Moderate or heavy showers of ice pellets":"./weather/64x64/day/377.png","Patchy light rain with thunder":"./weather/64x64/day/386.png","Moderate or heavy rain with thunder":"./weather/64x64/day/389.png","Patchy light snow with thunder":"./weather/64x64/day/392.png","Moderate or heavy snow with thunder":"./weather/64x64/day/395.png"},a={Clear:"./weather/64x64/night/113.png","Partly cloudy":"./weather/64x64/night/116.png",Cloudy:"./weather/64x64/night/119.png",Overcast:"./weather/64x64/night/122.png",Mist:"./weather/64x64/night/143.png","Patchy rain possible":"./weather/64x64/night/176.png","Patchy snow possible":"./weather/64x64/night/179.png","Patchy sleet possible":"./weather/64x64/night/182.png","Patchy freezing drizzle possible":"./weather/64x64/night/185.png","Thundery outbreaks possible":"./weather/64x64/night/200.png","Blowing snow":"./weather/64x64/night/227.png",Blizzard:"./weather/64x64/night/230.png",Fog:"./weather/64x64/night/248.png","Freezing fog":"./weather/64x64/night/260.png","Patchy light drizzle":"./weather/64x64/night/263.png","Light drizzle":"./weather/64x64/night/266.png","Freezing drizzle":"./weather/64x64/night/281.png","Heavy freezing drizzle":"./weather/64x64/night/284.png","Patchy light rain":"./weather/64x64/night/293.png","Light rain":"./weather/64x64/night/296.png","Moderate rain at times":"./weather/64x64/night/299.png","Moderate rain":"./weather/64x64/night/302.png","Heavy rain at times":"./weather/64x64/night/305.png","Heavy rain":"./weather/64x64/night/308.png","Light freezing rain":"./weather/64x64/night/311.png","Moderate or heavy freezing rain":"./weather/64x64/night/314.png","Light sleet":"./weather/64x64/night/317.png","Moderate or heavy sleet":"./weather/64x64/night/320.png","Patchy light snow":"./weather/64x64/night/323.png","Light snow":"./weather/64x64/night/326.png","Patchy moderate snow":"./weather/64x64/night/329.png","Moderate snow":"./weather/64x64/night/332.png","Patchy heavy snow":"./weather/64x64/night/335.png","Heavy snow":"./weather/64x64/night/338.png","Ice pellets":"./weather/64x64/night/350.png","Light rain shower":"./weather/64x64/night/353.png","Moderate or heavy rain shower":"./weather/64x64/night/356.png","Torrential rain shower":"./weather/64x64/night/359.png","Light sleet showers":"./weather/64x64/night/362.png","Moderate or heavy sleet showers":"./weather/64x64/night/365.png","Light snow showers":"./weather/64x64/night/368.png","Moderate or heavy snow showers":"./weather/64x64/night/371.png","Light showers of ice pellets":"./weather/64x64/night/374.png","Moderate or heavy showers of ice pellets":"./weather/64x64/night/377.png","Patchy light rain with thunder":"./weather/64x64/night/386.png","Moderate or heavy rain with thunder":"./weather/64x64/night/389.png","Patchy light snow with thunder":"./weather/64x64/night/392.png","Moderate or heavy snow with thunder":"./weather/64x64/night/395.png"};let r=document.querySelector(".buttons").children;function h(e){let t=document.querySelector(".hourly").children;console.log(d),console.log(w);for(let r=0;r<t.length;r++)t[r].querySelector(".hour").textContent=y[e].time,t[r].querySelector(".temp").textContent=y[e].temp,t[r].querySelector(".weather").textContent=y[e].weather,t[r].querySelector("img").src=e<=d||e>w?a[y[e].weather]:n[y[e].weather],e++}r[0].addEventListener("click",(function(){h(0)})),r[1].addEventListener("click",(function(){h(8)})),r[2].addEventListener("click",(function(){h(16)}));let o=document.querySelector(".change-forecast");o.addEventListener("click",(function(){let e=document.querySelector(".currentDisplay");"Daily Forecast"===e.textContent?(e.textContent="Hourly Forecast",document.querySelector(".forecast").style.display="none",document.querySelector(".hourly").style.display="flex",document.querySelector(".buttons").style.display="flex",o.textContent="Change To Daily"):(e.textContent="Daily Forecast",document.querySelector(".forecast").style.display="flex",document.querySelector(".hourly").style.display="none",document.querySelector(".buttons").style.display="none",o.textContent="Change To Hourly")}));let i="MISSISSAUGA",g=!0,s=[],y=[],w=0,d=0;class l{constructor(e,t,n,a){this.day=e,this.max_temp=t,this.min_temp=n,this.weather=a}}class c{constructor(e,t,n,a){this.time=e,this.temp=t,this.hourInt=n,this.weather=a}}const p=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],x=["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"];function u(){document.querySelector(".city-name").textContent=i,async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${i}&days=3`,{mode:"cors"}),a=await e.json();console.log(a);let r=a.forecast.forecastday;s=[];for(let e=0;e<r.length;e++){let t=p[new Date(r[e].date).getDay()],n="0",a="0";g?(n=r[e].day.maxtemp_c+" °C",a=r[e].day.mintemp_c+" °C"):(n=r[e].day.maxtemp_f+" °F",a=r[e].day.mintemp_f+" °F");let h=r[e].day.condition.text,o=new l(t,n,a,h);s.push(o)}!function(){let e=document.querySelector(".forecast").children;for(let t=0;t<e.length;t++)e[t].querySelector(".day").textContent=s[t].day,e[t].querySelector(".maxTemp").textContent=s[t].max_temp,e[t].querySelector(".minTemp").textContent=s[t].min_temp,e[t].querySelector(".weather").textContent=s[t].weather,e[t].querySelector("img").src=n[s[t].weather]}()}(),async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${i}&days=3`,{mode:"cors"}),n=await e.json();console.log(n);let a=n.forecast.forecastday[0].astro.sunset,r=n.forecast.forecastday[0].astro.sunrise,o=n.forecast.forecastday[0].date;w=new Date(o+" "+a).getHours(),d=new Date(o+" "+r).getHours();let s=n.forecast.forecastday[0].hour;y=[];for(let e=0;e<s.length;e++){let t=x[new Date(s[e].time).getHours()],n=new Date(s[e].time).getHours(),a="0";console.log(g),a=g?s[e].temp_c+" °C":s[e].temp_f+" °F";let r=s[e].condition.text,h=new c(t,a,n,r);y.push(h)}h(0)}()}document.querySelector("#new-city-form").addEventListener("submit",(function(e){e.preventDefault(),i=document.querySelector("#city").value,i.toUpperCase(),document.querySelector("#new-city-form").reset(),u()})),document.querySelector(".change-temp").addEventListener("click",(function(){"Change to °F"===this.textContent?(this.textContent="Change to °C",g=!1,u()):(this.textContent="Change to °F",g=!0,u())})),u(),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)})();