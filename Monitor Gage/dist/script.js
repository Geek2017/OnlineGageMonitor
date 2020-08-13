'use strict';

var rangeMeter = document.querySelector('#range');
var rangeShow = document.querySelector("#show");
var rangeClock = document.querySelector('.meter-clock');
var pdata = 0;


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
        "url": "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/data/m2",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function(response) {
        console.log(response.percentage)
        var rotateClock = response.percentage;
        rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180) / 100)) + 'deg)';
        rangeShow.value = rotateClock + '%';
    });

}, 100);