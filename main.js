(()=>{"use strict";const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];class a{constructor(t,a,e,s){this.day=t,this.max_temp=a,this.min_temp=e,this.weather=s}}!async function(){const e=await fetch("https://api.weatherapi.com/v1/forecast.json?key=93b4b840f9da481fb69144750230209&q=lOndon&days=3",{mode:"cors"}),s=await e.json();console.log(s.forecast);let o=s.forecast.forecastday,n=[];for(let e=0;e<o.length;e++){let s=t[new Date(o[e].date).getDay()],c=o[e].day.maxtemp_c,d=o[e].day.mintemp_c,y=o[e].day.condition.text,i=new a(s,c,d,y);n.push(i)}console.log(n)}()})();