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
            H: ${result.max_temp}   L: ${result.min_temp}
          </div>
          <li class="list-group-item"> Wind Speed : ${result.wind_speed}</li>
          <li class="list-group-item"> Feels Like : ${result.feels_like}</li>
          <li class="list-group-item"> Humidity : ${result.humidity}</li>
          <li class="list-group-item"> High : ${result.max_temp} Low: ${result.min_temp}</li>
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
      url: 'https://envirocast-gtihub-io.vercel.app/v1/weather?city=' + city,
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
            url: 'https://envirocast-gtihub-io.vercel.app/v1/weather?city=' + city,
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                var out = document.getElementById('otherOutput');
            out.innerHTML = ` <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-center align-items-center">
            <div">
              <div class="fw-bold" id = "temp" >${result.temp}&#176 C</div>
              H: ${result.max_temp}   L: ${result.min_temp}
            </div>
            <li class="list-group-item"> Wind Speed : ${result.wind_speed}</li>
            <li class="list-group-item"> Feels Like : ${result.feels_like}</li>
            <li class="list-group-item"> Humidity : ${result.humidity}</li>
            <li class="list-group-item"> High : ${result.max_temp} Low: ${result.min_temp}</li>
            </ul>
            `;
            document.querySelector('#otherCardTitle').innerHTML = city;

            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

