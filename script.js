var cities = ["brampton", "chandigarh", "new york"]

function getWeather(city) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/v1/weather?city=' + city,
      contentType: 'application/json',
      success: function(result) {
        resolve(result.temp);
      },
      error: function ajaxError(jqXHR) {
        reject(new Error('Error: ' + jqXHR.responseText));
      }
    });
  });
}

function LoadWeather() {
  var promises = cities.map(function(city) {
    return getWeather(city);
  });

  Promise.all(promises)
    .then(function(results) {
      results.forEach(function(temp, index) {
        var bout = document.getElementById(cities[index]);
        bout.innerHTML = temp;
      });
    })
    .catch(function(error) {
      console.error(error);
    });
}

   function Other()
    {
        var c = document.frmUserInfo.other.value;
        var city = c;
        $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/v1/weather?city=' + city,
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                var out = document.getElementById('otherOutput');
            out.innerHTML = result.temp;
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

