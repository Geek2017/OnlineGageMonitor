'use strict';

var rangeMeter = document.querySelector('#range');
var rangeShow = document.querySelector("#show");
var rangeClock = document.querySelector('.meter-clock');
var pdata = 0;
var needToReload = false;


setInterval(function() {

   


    // if (pdata < 100) {
    //     pdata = pdata * 1 + 5;
    // } else {
    //     pdata = 0;
    // }

    // var myData = JSON.stringify({

    //     "id": "m1",
    //     // "domain": "www.done.com"
    //     "percentage": pdata,
    //     // "password": Base64.encode(pwd.value),
    //     // "role": "ordinary"
    // });

    // $.ajax({
    //     type: "POST",
    //     dataType: "json",
    //     // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
    //     url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/data/{id}",
    //     data: myData,
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     success: function(data) {
    //         console.log(data);

    //     },
    //     error: function(error) {
    //         console.log(error);
    //     }
    // });

    var settings = {
        "url": "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/data/m1",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function(response) {
        console.log(response.percentage)
        var rotateClock = (response.percentage * 2 )/20;
        var temp = rotateClock * 100
        if(temp > 100){
            temp = 100;
        }
        rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180))) + 'deg)';
        rangeShow.value = Math.round(temp ) + '%';

        if(temp >= 80 && needToReload == false){
            // console.log("greater than 80 and false");
            var settings = {
                "url": "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/exercises/cj@verko.com",
                "method": "GET",
                "timeout": 0,
            };
            $.ajax(settings).done(function(response) {
                temp = 0;
                var reps = response.exercise1 * 1;
                reps = reps + 1;
                document.getElementById("reps").innerHTML = "Reps: " + reps;
                console.log(reps);

                var myData = JSON.stringify({
                    // "domain": "www.done.com"
                    "email": "cj@verko.com",
                    "exercise1": reps,
                    "exercise2": 0,
                    "exercise3": 0,
                    "exercise4": 0
                    // "password": Base64.encode(pwd.value),
                    // "role": "ordinary"
                });
            
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
                    url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/exercises/{id}",
                    data: myData,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    success: function(data) {
                        // console.log(data);
            
                    },
                    error: function(error) {
                        // console.log(error);
                    }
                });
            });
            needToReload = true;

            
        } else if (temp >= 80 & needToReload == true){
            console.log("You need to reaload");
        }
        
        if(temp <= 10){
            needToReload = false;
            console.log("Reloaded");
        }
    });

}, 800);