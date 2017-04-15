// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $('#updateLocation').click(function () {
    var location = $("input").val();
    $.simpleWeather({
      location: location,
      woeid: '',
      unit: 'f',
      success: function(weather) {
        html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  });
  
  var daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var start = moment().day();
  var len = daysOfWeek.length;

  for (var i = 0; i < 5; i++) {
    $('#day' + i).text(daysOfWeek[start % len]);
    start++;
  }
});
