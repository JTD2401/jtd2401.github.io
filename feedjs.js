//Twitter Widget JS
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id))
  {js=d.createElement(s);
    js.id=id;
    js.src=p+"://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js,fjs);
}}(document,"script","twitter-wjs");

//JSON and Weatherbit.io API
var requestURL = 'https://api.weatherbit.io/v1.0/forecast/3hourly/city?city_id=5134086&days=5&units=I&key=5b0e9dcfb5484019a66090f41621c536';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var weatherInfo = request.response;
  showWeather(weatherInfo);
}

function showWeather(jsonWeather) {
  var cityName = jsonWeather['city_name'];
  var windDirDay1Part1 = jsonWeather['data'][0]['wind_cdir'];
  var windSpeedDay1Part1 = jsonWeather['data'][0]['wind_spd'];
  var weatherIconDay1Part1 = jsonWeather['data'][0]['weather'][0];
  var weatherCodeDay1Part1 = jsonWeather['data'][0]['weather'][1];
  var weatherDescriptionDay1Part1 = jsonWeather['data'][0]['weather'][2];
  var temperatureDay1Part1 = jsonWeather['data'][0]['temp'];

  var windSpeedPTag = document.querySelector('#wind1P1');
  windSpeedPTag.textContent = "Wind Speed: " + windSpeedDay1Part1;
}
