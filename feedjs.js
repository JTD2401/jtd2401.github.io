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
  populateHeader(weatherInfo);
  showWeather(weatherInfo);
}

function showWeather(jsonWeather) {
  var cityName = jsonWeather['city_name'];
}
