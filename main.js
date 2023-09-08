(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{xj:()=>w,Rz:()=>g,UV:()=>s,MW:()=>y});let t="93b4b840f9da481fb69144750230209";const a={Sunny:"./weather/64x64/day/113.png","Partly cloudy":"./weather/64x64/day/116.png",Cloudy:"./weather/64x64/day/119.png",Overcast:"./weather/64x64/day/122.png",Mist:"./weather/64x64/day/143.png","Patchy rain possible":"./weather/64x64/day/176.png","Patchy snow possible":"./weather/64x64/day/179.png","Patchy sleet possible":"./weather/64x64/day/182.png","Patchy freezing drizzle possible":"./weather/64x64/day/185.png","Thundery outbreaks possible":"./weather/64x64/day/200.png","Blowing snow":"./weather/64x64/day/227.png",Blizzard:"./weather/64x64/day/230.png",Fog:"./weather/64x64/day/248.png","Freezing fog":"./weather/64x64/day/260.png","Patchy light drizzle":"./weather/64x64/day/263.png","Light drizzle":"./weather/64x64/day/266.png","Freezing drizzle":"./weather/64x64/day/281.png","Heavy freezing drizzle":"./weather/64x64/day/284.png","Patchy light rain":"./weather/64x64/day/293.png","Light rain":"./weather/64x64/day/296.png","Moderate rain at times":"./weather/64x64/day/299.png","Moderate rain":"./weather/64x64/day/302.png","Heavy rain at times":"./weather/64x64/day/305.png","Heavy rain":"./weather/64x64/day/308.png","Light freezing rain":"./weather/64x64/day/311.png","Moderate or heavy freezing rain":"./weather/64x64/day/314.png","Light sleet":"./weather/64x64/day/317.png","Moderate or heavy sleet":"./weather/64x64/day/320.png","Patchy light snow":"./weather/64x64/day/323.png","Light snow":"./weather/64x64/day/326.png","Patchy moderate snow":"./weather/64x64/day/329.png","Moderate snow":"./weather/64x64/day/332.png","Patchy heavy snow":"./weather/64x64/day/335.png","Heavy snow":"./weather/64x64/day/338.png","Ice pellets":"./weather/64x64/day/350.png","Light rain shower":"./weather/64x64/day/353.png","Moderate or heavy rain shower":"./weather/64x64/day/356.png","Torrential rain shower":"./weather/64x64/day/359.png","Light sleet showers":"./weather/64x64/day/362.png","Moderate or heavy sleet showers":"./weather/64x64/day/365.png","Light snow showers":"./weather/64x64/day/368.png","Moderate or heavy snow showers":"./weather/64x64/day/371.png","Light showers of ice pellets":"./weather/64x64/day/374.png","Moderate or heavy showers of ice pellets":"./weather/64x64/day/377.png","Patchy light rain with thunder":"./weather/64x64/day/386.png","Moderate or heavy rain with thunder":"./weather/64x64/day/389.png","Patchy light snow with thunder":"./weather/64x64/day/392.png","Moderate or heavy snow with thunder":"./weather/64x64/day/395.png"},n={Clear:"./weather/64x64/night/113.png","Partly cloudy":"./weather/64x64/night/116.png",Cloudy:"./weather/64x64/night/119.png",Overcast:"./weather/64x64/night/122.png",Mist:"./weather/64x64/night/143.png","Patchy rain possible":"./weather/64x64/night/176.png","Patchy snow possible":"./weather/64x64/night/179.png","Patchy sleet possible":"./weather/64x64/night/182.png","Patchy freezing drizzle possible":"./weather/64x64/night/185.png","Thundery outbreaks possible":"./weather/64x64/night/200.png","Blowing snow":"./weather/64x64/night/227.png",Blizzard:"./weather/64x64/night/230.png",Fog:"./weather/64x64/night/248.png","Freezing fog":"./weather/64x64/night/260.png","Patchy light drizzle":"./weather/64x64/night/263.png","Light drizzle":"./weather/64x64/night/266.png","Freezing drizzle":"./weather/64x64/night/281.png","Heavy freezing drizzle":"./weather/64x64/night/284.png","Patchy light rain":"./weather/64x64/night/293.png","Light rain":"./weather/64x64/night/296.png","Moderate rain at times":"./weather/64x64/night/299.png","Moderate rain":"./weather/64x64/night/302.png","Heavy rain at times":"./weather/64x64/night/305.png","Heavy rain":"./weather/64x64/night/308.png","Light freezing rain":"./weather/64x64/night/311.png","Moderate or heavy freezing rain":"./weather/64x64/night/314.png","Light sleet":"./weather/64x64/night/317.png","Moderate or heavy sleet":"./weather/64x64/night/320.png","Patchy light snow":"./weather/64x64/night/323.png","Light snow":"./weather/64x64/night/326.png","Patchy moderate snow":"./weather/64x64/night/329.png","Moderate snow":"./weather/64x64/night/332.png","Patchy heavy snow":"./weather/64x64/night/335.png","Heavy snow":"./weather/64x64/night/338.png","Ice pellets":"./weather/64x64/night/350.png","Light rain shower":"./weather/64x64/night/353.png","Moderate or heavy rain shower":"./weather/64x64/night/356.png","Torrential rain shower":"./weather/64x64/night/359.png","Light sleet showers":"./weather/64x64/night/362.png","Moderate or heavy sleet showers":"./weather/64x64/night/365.png","Light snow showers":"./weather/64x64/night/368.png","Moderate or heavy snow showers":"./weather/64x64/night/371.png","Light showers of ice pellets":"./weather/64x64/night/374.png","Moderate or heavy showers of ice pellets":"./weather/64x64/night/377.png","Patchy light rain with thunder":"./weather/64x64/night/386.png","Moderate or heavy rain with thunder":"./weather/64x64/night/389.png","Patchy light snow with thunder":"./weather/64x64/night/392.png","Moderate or heavy snow with thunder":"./weather/64x64/night/395.png"};let r=document.querySelector(".buttons").children;function h(e){let t=document.querySelector(".hourly").children;console.log(w),console.log(y);for(let r=0;r<t.length;r++)t[r].querySelector(".hour").textContent=s[e].time,t[r].querySelector(".temp").textContent=s[e].temp,t[r].querySelector(".weather").textContent=s[e].weather,t[r].querySelector("img").src=e<=w||e>y?n[s[e].weather]:a[s[e].weather],e++}r[0].addEventListener("click",(function(){h(0)})),r[1].addEventListener("click",(function(){h(8)})),r[2].addEventListener("click",(function(){h(16)}));let o=document.querySelector(".change-forecast");o.addEventListener("click",(function(){let e=document.querySelector(".currentDisplay");"Daily Forecast"===e.textContent?(e.textContent="Hourly Forecast",document.querySelector(".forecast").style.display="none",document.querySelector(".hourly").style.display="flex",document.querySelector(".buttons").style.display="flex",o.textContent="Change To Daily"):(e.textContent="Daily Forecast",document.querySelector(".forecast").style.display="flex",document.querySelector(".hourly").style.display="none",document.querySelector(".buttons").style.display="none",o.textContent="Change To Hourly")}));let i="MISSISSAUGA",g=[],s=[],y=0,w=0;class d{constructor(e,t,a,n){this.day=e,this.max_temp=t,this.min_temp=a,this.weather=n}}class l{constructor(e,t,a,n){this.time=e,this.temp=t,this.hourInt=a,this.weather=n}}const c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],p=["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"];function x(){document.querySelector(".city-name").textContent=i,async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${i}&days=3`,{mode:"cors"}),n=await e.json();console.log(n);let r=n.forecast.forecastday;g=[];for(let e=0;e<r.length;e++){let t=c[new Date(r[e].date).getDay()],a=r[e].day.maxtemp_c+" °C",n=r[e].day.mintemp_c+" °C",h=r[e].day.condition.text,o=new d(t,a,n,h);g.push(o)}console.log(g),function(){let e=document.querySelector(".forecast").children;for(let t=0;t<e.length;t++)e[t].querySelector(".day").textContent=g[t].day,e[t].querySelector(".maxTemp").textContent=g[t].max_temp,e[t].querySelector(".minTemp").textContent=g[t].min_temp,e[t].querySelector(".weather").textContent=g[t].weather,e[t].querySelector("img").src=a[g[t].weather]}()}(),async function(){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t}&q=${i}&days=3`,{mode:"cors"}),a=await e.json();console.log(a);let n=a.forecast.forecastday[0].astro.sunset,r=a.forecast.forecastday[0].astro.sunrise,o=a.forecast.forecastday[0].date;y=new Date(o+" "+n).getHours(),w=new Date(o+" "+r).getHours();let g=a.forecast.forecastday[0].hour;s=[];for(let e=0;e<g.length;e++){let t=p[new Date(g[e].time).getHours()],a=new Date(g[e].time).getHours(),n=g[e].temp_c+" °C",r=g[e].condition.text,h=new l(t,n,a,r);s.push(h)}console.log(s),h(0)}()}document.querySelector("#new-city-form").addEventListener("submit",(function(e){e.preventDefault(),i=document.querySelector("#city").value,i.toUpperCase(),document.querySelector("#new-city-form").reset(),x()})),x(),window.history.replaceState&&window.history.replaceState(null,null,window.location.href)})();