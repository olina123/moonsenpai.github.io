// v3.1.0
//Docs at http://simpleweatherjs.com


$(document).ready(function () {
  simpleWeather();
});

function simpleWeather(name) {
  $.simpleWeather({
    location: name || 'Austin, TX',
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
}


 function myFunction() {
   temp = $('#weather h2').text();
  simpleWeather($('#test').val());
   
  var daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var start = moment().day();
  var len = daysOfWeek.length;

  for (var i = 0; i < 5; i++) {
    $('#day' + i).text(daysOfWeek[start % len]);
    start++;
  }
     var a = document.getElementById('Outfit1');
   var b = document.getElementById('Outfit2');
   var c = document.getElementById('Outfit3');
   var d = document.getElementById('Outfit4');
   var e = document.getElementById('Outfit5');
   var f = document.getElementById('Outfit6');
   var g = document.getElementById('Outfit7');
   var h = document.getElementById('Outfit8');
   var j = document.getElementById('Outfit10');
   var k = document.getElementById('Outfit11');
   var l = document.getElementById('Outfit12');
   var m = document.getElementById('Outfit13');
   var n = document.getElementById('Outfit14');
     if (temp.match(/[0-9]+/)[0] > 60) {
         a.style.display = 'block';
       b.style.display = 'block';
       c.style.display = 'block';
       d.style.display = 'block';
       e.style.display = 'block';
       f.style.display = 'none';
       g.style.display = 'none';
       h.style.display = 'none';
       j.style.display = 'none';
       k.style.display = 'none';
       l.style.display = 'none';
       m.style.display = 'none';
       n.style.display = 'none';
       
       
     } else {
         a.style.display = 'none';
         b.style.display = 'none';
         c.style.display = 'none';
         d.style.display = 'none';
         e.style.display = 'none';
         f.style.display = 'block';
         g.style.display = 'block';
         h.style.display = 'block';
         j.style.display = 'block';
         k.style.display = 'block';
         l.style.display = 'block';
         m.style.display = 'block';
         n.style.display = 'block';
       
       
     }
 }
