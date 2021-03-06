require('dotenv').config();
const api_key = process.env.API_KEY;

// Get our long and lat location
window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  } else {
    alert('Hey you need to allow geolocation for this app to work');
  }
});
