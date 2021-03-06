import 'core-js/stable';
import 'regenerator-runtime/runtime';
require('dotenv').config();
const api_key = process.env.API_KEY;

/**
 * getWeather data from openweather api
 * @param {int} long
 * @param {int} lat
 */
const getWeather = async function (long, lat) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`
  );
  const data = await res.json();
  console.log(data);
};

// Get our long and lat location
window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      getWeather(long, lat);
    });
  } else {
    alert('Hey you need to allow geolocation for this app to work');
  }
});
