$(document).ready(function(){

  // SETTING REAL TIME
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function timeNow() {

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var ampm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    } else if (hour === 0) {
        hour = 12;
        ampm = "AM";
    };
    minute = checkTime(minute);

    document.getElementById('time-now').textContent = hour + ":" + minute + " " + ampm;

    setTimeout(timeNow, 1000);
  }

  document.getElementById('time-now').addEventListener('onload', timeNow(), false);

  // SETTING WEATHER DATA

  var latitud;
  var longitud;

  // API URL

  $.getJSON("http://ip-api.com/json", function(coords){
    latitud = coords.lat;
    longitud = coords.lon;

    var api = "https://api.openweathermap.org/data/2.5/weather?lat="+latitud+"&lon="+longitud+"&APPID=2d33c7b8363de03942cccc98d15bbdcd";

    $.getJSON(api, function(data){

      var kelTemp;
      var farTemp;
      var celTemp;
      var location = data.name;
      //  + ", " + data.sys.country
      var weatherType = data.weather[0].description.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });;
      var iconURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var img = document.createElement("img");
      img.src = iconURL;

      var windSpeed = data.wind.speed;
      var humidity = data.main.humidity;

      kelTemp = data.main.temp;
      var tempSwap = true;

      // Temperature in Farenheit
      farTemp = (kelTemp*(9/5)-459.67).toFixed(1);

      // Temperature in Celsius
      celTemp = (kelTemp - 273).toFixed(1);

      $("#location").html(location);
      $("#weatherType").html(weatherType);
      document.getElementById("icon").appendChild(img);
      $("#farTemp").html(farTemp + "<span>&#8457;</span>");

      $("#farTemp").click(function(){
        if (tempSwap===false) {
          $("#farTemp").html(farTemp + "<span>&#8457;</span>");
          tempSwap = true;
        } else {
          $("#farTemp").html(celTemp + "<span>&#8451;</span>");
          tempSwap = false;
        }
      })
      windSpeed = (2.237 * windSpeed).toFixed(1);
      $("#windSpeed").html("Wind: " + windSpeed + " mph");

      $("#humidity").html("Humidity: " + humidity + "%");

      if (farTemp>80) {
        $(".card").css("background", "-webkit-linear-gradient(270deg, #1a2a6c 10%, #b21f1f 45%, #fdbb2d 100%)");
      } else if (farTemp>70) {
        $(".card").css("background", "-webkit-linear-gradient(270deg, #3F464C 10%, #108dc7 30%, #ef8e38 80%)");
      } else if (farTemp>60) {
        $(".card").css("background", "-webkit-linear-gradient(270deg, #3F464C 10%, #108dc7 50%, #ef8e38 100%)");
      } else if (farTemp>50) {
        // $(".card").css("background", "-webkit-linear-gradient(270deg, #3F464C 20%, #3F5EFB 40%, #FC466B 80%)");
        $(".card").css("background", "-webkit-linear-gradient(270deg, #3F464C 10%, #108dc7 35%, #ef8e38 90%)");
      } else if (farTemp>40) {
        $(".card").css("background", "-webkit-linear-gradient(270deg, #3F464C 10%, #1D4350 40%, #A43931 80%)");
      }
    });
  });
});
