(()=>{"use strict";var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{xj:()=>y,Rz:()=>c,UV:()=>i,MW:()=>g});let t="93b4b840f9da481fb69144750230209";const r={Sunny:"./src/weather/64x64/day/113.png","Partly cloudy":"../src/weather/64x64/day/116.png",Cloudy:"../src/weather/64x64/day/119.png",Overcast:"../src/weather/64x64/day/122.png",Mist:"../src/weather/64x64/day/143.png","Patchy rain possible":"../src/weather/64x64/day/176.png","Patchy snow possible":"../src/weather/64x64/day/179.png","Patchy sleet possible":"../src/weather/64x64/day/182.png","Patchy freezing drizzle possible":"../src/weather/64x64/day/185.png","Thundery outbreaks possible":"../src/weather/64x64/day/200.png","Blowing snow":"../src/weather/64x64/day/227.png",Blizzard:"../src/weather/64x64/day/230.png",Fog:"../src/weather/64x64/day/248.png","Freezing fog":"../src/weather/64x64/day/260.png","Patchy light drizzle":"../src/weather/64x64/day/263.png","Light drizzle":"../src/weather/64x64/day/266.png","Freezing drizzle":"../src/weather/64x64/day/281.png","Heavy freezing drizzle":"../src/weather/64x64/day/284.png","Patchy light rain":"../src/weather/64x64/day/293.png","Light rain":"../src/weather/64x64/day/296.png","Moderate rain at times":"../src/weather/64x64/day/299.png","Moderate rain":"../src/weather/64x64/day/302.png","Heavy rain at times":"../src/weather/64x64/day/305.png","Heavy rain":"../src/weather/64x64/day/308.png","Light freezing rain":"../src/weather/64x64/day/311.png","Moderate or heavy freezing rain":"../src/weather/64x64/day/314.png","Light sleet":"../src/weather/64x64/day/317.png","Moderate or heavy sleet":"../src/weather/64x64/day/320.png","Patchy light snow":"../src/weather/64x64/day/323.png","Light snow":"../src/weather/64x64/day/326.png","Patchy moderate snow":"../src/weather/64x64/day/329.png","Moderate snow":"../src/weather/64x64/day/332.png","Patchy heavy snow":"../src/weather/64x64/day/335.png","Heavy snow":"../src/weather/64x64/day/338.png","Ice pellets":"../src/weather/64x64/day/350.png","Light rain shower":"../src/weather/64x64/day/353.png","Moderate or heavy rain shower":"../src/weather/64x64/day/356.png","Torrential rain shower":"../src/weather/64x64/day/359.png","Light sleet showers":"../src/weather/64x64/day/362.png","Moderate or heavy sleet showers":"../src/weather/64x64/day/365.png","Light snow showers":"../src/weather/64x64/day/368.png","Moderate or heavy snow showers":"../src/weather/64x64/day/371.png","Light showers of ice pellets":"../src/weather/64x64/day/374.png","Moderate or heavy showers of ice pellets":"../src/weather/64x64/day/377.png","Patchy light rain with thunder":"../src/weather/64x64/day/386.png","Moderate or heavy rain with thunder":"../src/weather/64x64/day/389.png","Patchy light snow with thunder":"../src/weather/64x64/day/392.png","Moderate or heavy snow with thunder":"../src/weather/64x64/day/395.png"},a={Clear:"../src/weather/64x64/night/113.png","Partly cloudy":"../src/weather/64x64/night/116.png",Cloudy:"../src/weather/64x64/night/119.png",Overcast:"../src/weather/64x64/night/122.png",Mist:"../src/weather/64x64/night/143.png","Patchy rain possible":"../src/weather/64x64/night/176.png","Patchy snow possible":"../src/weather/64x64/night/179.png","Patchy sleet possible":"../src/weather/64x64/night/182.png","Patchy freezing drizzle possible":"../src/weather/64x64/night/185.png","Thundery outbreaks possible":"../src/weather/64x64/night/200.png","Blowing snow":"../src/weather/64x64/night/227.png",Blizzard:"../src/weather/64x64/night/230.png",Fog:"../src/weather/64x64/night/248.png","Freezing fog":"../src/weather/64x64/night/260.png","Patchy light drizzle":"../src/weather/64x64/night/263.png","Light drizzle":"../src/weather/64x64/night/266.png","Freezing drizzle":"../src/weather/64x64/night/281.png","Heavy freezing drizzle":"../src/weather/64x64/night/284.png","Patchy light rain":"../src/weather/64x64/night/293.png","Light rain":"../src/weather/64x64/night/296.png","Moderate rain at times":"../src/weather/64x64/night/299.png","Moderate rain":"../src/weather/64x64/night/302.png","Heavy rain at times":"../src/weather/64x64/night/305.png","Heavy rain":"../src/weather/64x64/night/308.png","Light freezing rain":"../src/weather/64x64/night/311.png","Moderate or heavy freezing rain":"../src/weather/64x64/night/314.png","Light sleet":"../src/weather/64x64/night/317.png","Moderate or heavy sleet":"../src/weather/64x64/night/320.png","Patchy light snow":"../src/weather/64x64/night/323.png","Light snow":"../src/weather/64x64/night/326.png","Patchy moderate snow":"../src/weather/64x64/night/329.png","Moderate snow":"../src/weather/64x64/night/332.png","Patchy heavy snow":"../src/weather/64x64/night/335.png","Heavy snow":"../src/weather/64x64/night/338.png","Ice pellets":"../src/weather/64x64/night/350.png","Light rain shower":"../src/weather/64x64/night/353.png","Moderate or heavy rain shower":"../src/weather/64x64/night/356.png","Torrential rain shower":"../src/weather/64x64/night/359.png","Light sleet showers":"../src/weather/64x64/night/362.png","Moderate or heavy sleet showers":"../src/weather/64x64/night/365.png","Light snow showers":"../src/weather/64x64/night/368.png","Moderate or heavy snow showers":"../src/weather/64x64/night/371.png","Light showers of ice pellets":"../src/weather/64x64/night/374.png","Moderate or heavy showers of ice pellets":"../src/weather/64x64/night/377.png","Patchy light rain with thunder":"../src/weather/64x64/night/386.png","Moderate or heavy rain with thunder":"../src/weather/64x64/night/389.png","Patchy light snow with thunder":"../src/weather/64x64/night/392.png","Moderate or heavy snow with thunder":"../src/weather/64x64/night/395.png"};let n=document.querySelector(".buttons").children;function s(e){let t=document.querySelector(".hourly").children;console.log(y),console.log(g);for(let n=0;n<t.length;n++)t[n].querySelector(".hour").textContent=i[e].time,t[n].querySelector(".temp").textContent=i[e].temp,t[n].querySelector(".weather").textContent=i[e].weather,t[n].querySelector("img").src=e<=y||e>g?a[i[e].weather]:r[i[e].weather],e++}n[0].addEventListener("click",(function(){s(0)})),n[1].addEventListener("click",(function(){s(8)})),n[2].addEventListener("click",(function(){s(16)}));let h=document.querySelector(".change-forecast");h.addEventListener("click",(function(){let e=document.querySelector(".currentDisplay");"Daily Forecast"===e.textContent?(e.textContent="Hourly Forecast",document.querySelector(".forecast").style.display="none",document.querySelector(".hourly").style.display="flex",document.querySelector(".buttons").style.display="flex",h.textContent="Change To Daily"):(e.textContent="Daily Forecast",document.querySelector(".forecast").style.display="flex",document.querySelector(".hourly").style.display="none",document.querySelector(".buttons").style.display="none",h.textContent="Change To Hourly")})),console.log("test");let o="MISSISSAUGA",c=[],i=[],g=0,y=0;class w{constructor(e,t,r,a){this.day=e,this.max_temp=t,this.min_temp=r,this.weather=a}}class l{constructor(e,t,r,a){this.time=e,this.temp=t,this.hourInt=r,this.weather=a}}const d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],p=["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"];function x(){document.querySelector(".city-name").textContent=o,async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${o}&days=3`,{mode:"cors"}),a=await e.json();console.log(a);let n=a.forecast.forecastday;c=[];for(let e=0;e<n.length;e++){let t=d[new Date(n[e].date).getDay()],r=n[e].day.maxtemp_c+" °C",a=n[e].day.mintemp_c+" °C",s=n[e].day.condition.text,h=new w(t,r,a,s);c.push(h)}console.log(c),function(){let e=document.querySelector(".forecast").children;for(let t=0;t<e.length;t++)e[t].querySelector(".day").textContent=c[t].day,e[t].querySelector(".maxTemp").textContent=c[t].max_temp,e[t].querySelector(".minTemp").textContent=c[t].min_temp,e[t].querySelector(".weather").textContent=c[t].weather,e[t].querySelector("img").src=r[c[t].weather]}()}(),async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${o}&days=3`,{mode:"cors"}),r=await e.json();console.log(r);let a=r.forecast.forecastday[0].astro.sunset,n=r.forecast.forecastday[0].astro.sunrise,h=r.forecast.forecastday[0].date;g=new Date(h+" "+a).getHours(),y=new Date(h+" "+n).getHours();let c=r.forecast.forecastday[0].hour;i=[];for(let e=0;e<c.length;e++){let t=p[new Date(c[e].time).getHours()],r=new Date(c[e].time).getHours(),a=c[e].temp_c+" °C",n=c[e].condition.text,s=new l(t,a,r,n);i.push(s)}console.log(i),s(0)}()}document.querySelector("#new-city-form").addEventListener("submit",(function(e){e.preventDefault(),o=document.querySelector("#city").value,o.toUpperCase(),document.querySelector("#new-city-form").reset(),x()})),x(),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)})();