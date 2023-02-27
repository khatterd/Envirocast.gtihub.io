var cities = ["brampton", "chandigarh", "new york"]

function LoadWeather()
{
    for (let x of cities)
    {
        var city = x
        $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/v1/weather?city=' + city,
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var bout = document.getElementById(x);
            bout.innerHTML = result.temp;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    }
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

document.getElementById("b").addEventListener("click", fun);
    document.getElementById("hey").addEventListener("click", fun);

    function fun () {
        console.log("hello");
    }
