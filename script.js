var cities = ["brampton", "chandigarh", "new york"]


function LoadWeather() {
    var promises = cities.map(function(city) {
      return getWeather(city);
    });
  
    Promise.all(promises)
      .then(function(results) {
        results.forEach(function(result, index) {
          var bout = document.getElementById(cities[index]);
          bout.innerHTML = ` <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-center align-items-center">
          <div">
            <div class="fw-bold" id = "temp" >${result.temp}&#176 C</div>
            H: ${result.temp}   L: ${result.temp}
          </div>
          <li class="list-group-item"> Wind Speed : ${result.temp}</li>
          <li class="list-group-item"> Feels Like : ${result.temp}</li>
          <li class="list-group-item"> Humidity : ${result.temp}</li>
          <li class="list-group-item"> High : ${result.temp} Low: ${result.temp}</li>
          </ul>
          `;
          
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  
function getWeather(city) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/v1/weather?city=' + city,
      contentType: 'application/json',
      success: function(result) {
        resolve(result);
        console.log(result)
      },
      error: function ajaxError(jqXHR) {
        reject(new Error('Error: ' + jqXHR.responseText));
      }
    });
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
            document.querySelector('#searchCity').innerHTML = city;
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

