$('document').ready(function () {

  /********** Day and Date module *********/
  let today = new Date();
  let month = today.getMonth();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  $('#date-time').html(daysOfWeek[today.getDay()] + ', ' + today.getDate() + 'th ' + monthNames[today.getMonth()] + ' ' + today.getUTCFullYear());

  /****************************************/

  /********** Temp and Location module *********/

  navigator.geolocation.getCurrentPosition((position) => {
    let weatherData = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      units: 'metric',
      appID: '4fc4ebf2bdc386013e63de54aef8e76b'
    }
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?', weatherData, (data) => {
      $('#temp-location').html(Math.ceil(data.main.temp) + ' ' + String.fromCharCode(176) + 'C, ' + data.name + ', ' + data.sys.country);
    })
  },
  );
});