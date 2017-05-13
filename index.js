// v3.1.0
//Docs at http://simpleweatherjs.com
 $(window).load(function(){        
   $('#myModal').modal('show');
    }); 
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




 function myFunction() {
   temp = $('#weather h2').text()
     var a = document.getElementById('Outfit 1');
   var b = document.getElementById('Outfit 2');
   var c = document.getElementById('Outfit 3');
   var d = document.getElementById('Outfit 4');
   var e = document.getElementById('Outfit 5');
   var f = document.getElementById('Outfit 6');
   var g = document.getElementById('Outfit 7');
   var h = document.getElementById('Outfit 8');
   var i = document.getElementById('Outfit 9');
   var j = document.getElementById('Outfit 10');
   var k = document.getElementById('Outfit 11');
   var l = document.getElementById('Outfit 12');
   var m = document.getElementById('Outfit 13');
   var n = document.getElementById('Outfit 14');
     if (temp.match(/[0-9]+/)[0] > 60) {
         a.style.display = 'block';
       b.style.display = 'block';
       c.style.display = 'block';
       d.style.display = 'block';
       e.style.display = 'block';
       f.style.display = 'none';
       g.style.display = 'none';
       h.style.display = 'none';
       i.style.display = 'none';
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
       i.style.display = 'block';
       j.style.display = 'block';
       
       
     }
 }
