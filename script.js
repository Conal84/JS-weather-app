import 'core-js/stable';
import 'regenerator-runtime/runtime';
require('dotenv').config();
const api_key = process.env.API_KEY;

// HTML elements
const timezoneEl = document.querySelector('.location-timezone');
const tempEl = document.querySelector('.temp-degree');
const descriptionEl = document.querySelector('.temp-description');
const iconEl = document.querySelector('.icon');
const faviconEl = document.querySelector('.favicon');

/**
 * getWeather data from openweather api
 * @param {int} long
 * @param {int} lat
 */
const getWeather = async function (long, lat) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`
  );
  const data = await res.json();
  const icon = data.weather[0].icon;

  timezoneEl.innerHTML = `${data.name}, ${data.sys.country}`;
  descriptionEl.innerHTML = data.weather[0].description;
  tempEl.innerHTML = data.main.temp;
  iconEl.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  faviconEl.href = `http://openweathermap.org/img/wn/${icon}@4x.png`;
};

// Get our long and lat location
window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      getWeather(long, lat);
    });
  } else {
    alert('Hey you need to allow geolocation for this app to work');
  }
});
