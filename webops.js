if(confirm("DO YOU ALLOW THIS WEBSITE TO ACCESS YOUR LOCATION ?")){ // confirm
getlocation();
function getlocation(){
    var loc = navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(loc){
  lat = loc.coords.latitude;
  long = loc.coords.longitude;
  checkweather(lat,long);
}
const apiKey = "bc64055e692371078cc57d8bfe29b323"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function checkweather(lat,long){
    const response = await fetch(apiUrl + `lat=${lat}&` + `lon=${long}&`+ `appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    const date = document.querySelector(".info .date");
    const date1 = new Date();
    const n = date1.toDateString();
    date.innerHTML = `${n}`;
    const icon = document.querySelector(".info .image");
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"><div class="temp"></div>`;
    const des = document.querySelector(".info .des");
    des.innerHTML = data.weather[0].description;
    const city = document.querySelector(".info .city");
    city.innerHTML= data.name;
    const temp = document.querySelector(".info .temp");
    temp.innerHTML = data.main.temp + '&deg';
    const max_min = document.querySelector(".info .max_min");
    const feel  = document.querySelector(".info .max_min .span");
    max_min.innerHTML = data.main.temp_max + '&deg/' + data.main.temp_min + `&deg Feels like ${data.main.feels_like}&deg`
    const humid = document.querySelector(".weather .box.two.humid");
    humid.innerHTML = data.main.humidity+'%';
    const press = document.querySelector(".weather .box.two.pres");
    press.innerHTML = data.main.pressure+'pa';
    const winds = document.querySelector(".weather .box.two.winds");
    winds.innerHTML = data.wind.speed+'kmph';
    const windd = document.querySelector(".weather .box.two.windd");
    windd.innerHTML = data.wind.deg;
    const precip = document.querySelector(".weather .box.two.precip");
    if(data.rain === undefined){
      precip.innerHTML = 0;
    }
    else{
    precip.innerHTML = data.rain;}
    const visible = document.querySelector(".weather .box.two.visible");
    visible.innerHTML = data.visibility+'km';
    const uv = document.querySelector(".weather .box.two.uv");
}
}