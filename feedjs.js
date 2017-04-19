//Twitter Widget JS
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id))
  {
    js=d.createElement(s);
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
  //Variables for dynamic elements in the weather widget
  var day1th = document.querySelector('#day1');
  var day2th = document.querySelector('#day2');
  var day3th = document.querySelector('#day3');
  var day4th = document.querySelector('#day4');
  var day5th = document.querySelector('#day5');

  var day1weather1 = document.querySelector('#day1weather1');
  var day2weather1 = document.querySelector('#day2weather1');
  var day3weather1 = document.querySelector('#day3weather1');
  var day4weather1 = document.querySelector('#day4weather1');
  var day5weather1 = document.querySelector('#day5weather1');

  var day1weather2 = document.querySelector('#day1weather2');
  var day2weather2 = document.querySelector('#day2weather2');
  var day3weather2 = document.querySelector('#day3weather2');
  var day4weather2 = document.querySelector('#day4weather2');
  var day5weather2 = document.querySelector('#day5weather2');

  var day1weather3 = document.querySelector('#day1weather3');
  var day2weather3 = document.querySelector('#day2weather3');
  var day3weather3 = document.querySelector('#day3weather3');
  var day4weather3 = document.querySelector('#day4weather3');
  var day5weather3 = document.querySelector('#day5weather3');

  var day1weather4 = document.querySelector('#day1weather4');
  var day2weather4 = document.querySelector('#day2weather4');
  var day3weather4 = document.querySelector('#day3weather4');
  var day4weather4 = document.querySelector('#day4weather4');
  var day5weather4 = document.querySelector('#day5weather4');

  var day1weather5 = document.querySelector('#day1weather5');
  var day2weather5 = document.querySelector('#day2weather5');
  var day3weather5 = document.querySelector('#day3weather5');
  var day4weather5 = document.querySelector('#day4weather5');
  var day5weather5 = document.querySelector('#day5weather5');

  var day1weather6 = document.querySelector('#day1weather6');
  var day2weather6 = document.querySelector('#day2weather6');
  var day3weather6 = document.querySelector('#day3weather6');
  var day4weather6 = document.querySelector('#day4weather6');
  var day5weather6 = document.querySelector('#day5weather6');

  var day1weather7 = document.querySelector('#day1weather7');
  var day2weather7 = document.querySelector('#day2weather7');
  var day3weather7 = document.querySelector('#day3weather7');
  var day4weather7 = document.querySelector('#day4weather7');
  var day5weather7 = document.querySelector('#day5weather7');

  var day1weather8 = document.querySelector('#day1weather8');
  var day2weather8 = document.querySelector('#day2weather8');
  var day3weather8 = document.querySelector('#day3weather8');
  var day4weather8 = document.querySelector('#day4weather8');
  var day5weather8 = document.querySelector('#day5weather8');

  //Array of elements to use in for loop
  var weatherElements =
    [day1weather1, day1weather2, day1weather3, day1weather4, day1weather5,
     day1weather6, day1weather7, day1weather8, day2weather1, day2weather2,
     day2weather3, day2weather4, day2weather5, day2weather6, day2weather7,
     day2weather8, day3weather1, day3weather2, day3weather3, day3weather4,
     day3weather5, day3weather6, day3weather7, day3weather8, day4weather1,
     day4weather2, day4weather3, day4weather4, day4weather5, day4weather6,
     day4weather7, day4weather8, day5weather1, day5weather2, day5weather3,
     day5weather4, day5weather5, day5weather6, day5weather7, day5weather8];


  //logic to leave columns without info empty
  var firstTimeStamp = jsonWeather['data'][0]['datetime'];
  var time;
  //Checks hour first time stamp
  switch(firstTimeStamp.charAt(11))
  {
    case '0':
      switch(firstTimeStamp.charAt(12))
      {
        case '0':
          time = 0;
          break;
        case '3':
          time = 1;
          break;
        case '6':
          time = 2;
          break;
        case '9':
          time = 3;
          break;
      }
      break;
    case '1':
      switch(firstTimeStamp.charAt(12))
      {
        case '2':
          time = 4;
          break;
        case '5':
          time = 5;
          break;
        case '8':
          time = 6;
          break;
    }
      break;
    case '2': //first timestamp is last time of the day
    time = 7;
    break;
  }

  for (; time < 40; time++)
  {
    weatherElements[time].textContent = jsonWeather['data'][time]['weather'][2];
  }

  var cityName = jsonWeather['city_name'];
  var windDirDay1Part1 = jsonWeather['data'][0]['wind_cdir'];
  var windSpeedDay1Part1 = jsonWeather['data'][0]['wind_spd'];
  var weatherIconDay1Part1 = jsonWeather['data'][0]['weather'][0];
  var weatherCodeDay1Part1 = jsonWeather['data'][0]['weather'][1];
  var weatherDescriptionDay1Part1 = jsonWeather['data'][0]['weather'][2];
  var temperatureDay1Part1 = jsonWeather['data'][0]['temp'];
  var timeStampDay1Part1 = jsonWeather['data'][0]['datetime'];

  var windSpeedPTag = document.querySelector('#wind1P1');

  windSpeedPTag.textContent = "Wind Speed: " + windSpeedDay1Part1;
}
