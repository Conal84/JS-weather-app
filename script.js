// Get our long and lat location
window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  } else {
    alert('Hey you need to allow geolocation for this app to work');
  }
});
