var city = 'brampton'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var bout = document.getElementById('brampton');
            bout.innerHTML = result.temp;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


    var city = 'chandigarh'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var cout = document.getElementById('chandigarh');
            cout.innerHTML = result.temp;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    var city = 'new york'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var nout = document.getElementById('newyork');
            nout.innerHTML = result.temp;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

   function Other()
    {
        var c = document.frmUserInfo.other.value;
        var city = c;
        $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'i3GlPtu1RgHdbWp5A5uo0A==pYXme5cs3LcU7U6t'},
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

    // var holderList = document.querySelector(".card")
    // holderList[1].addEventListener("mouseover", function () // for second image
    // {
    //   return (
    //     (window.alert("hello"))
    //   );
    // });

    
    }

document.getElementById("b").addEventListener("click", fun);
    document.getElementById("hey").addEventListener("click", fun);

    function fun () {
        console.log("hello");
    }
