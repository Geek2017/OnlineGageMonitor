'use strict';

angular.module('newApp').controller('DashboardCtrl', function($scope) {
    $(document).ready(function() {
        
        var rangeMeter = document.querySelector('#range');
        var rangeShow = document.querySelector("#show");
        var rangeClock = document.querySelector('.meter-clock');
        var pdata = 0;
        var needToReload = false;

        var mac = sessionStorage.getItem("mac");
        
        
        setInterval(function() {

            var E1, E2, E3, E4;
    var email, password, macaddres, percentage;

    if(document.getElementById('E1').checked) { 
        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            document.getElementById("reps").innerHTML = "Reps: " + response.exercise1;
        });
        //  console.log("Exercise1");
        E1 = true;
        E2 = false;
        E3 = false;
    } 
    else if(document.getElementById('E2').checked) { 
        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            document.getElementById("reps").innerHTML = "Reps: " + response.exercise2;
        });
        // console.log("Exercise2");
        E1 = false;
        E2 = true;
        E3 = false;
    } 
    else if(document.getElementById('E3').checked) { 
        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            document.getElementById("reps").innerHTML = "Reps: " + response.exercise3;
        });
        // console.log("Exercise3");
        E1 = false;
        E2 = false;
        E3 = true;
    } 

    if(E1){
        post1();
    } else if(E2){
        post2();
    } else if(E3){
        post3();
    }

    function post1(){

        let reps1, reps2, reps3, reps4;
        // console.log("Exercise1");

        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/device/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            console.log(response.units)
            var rotateClock = (response.units * 2 )/20;
            var temp = rotateClock * 100
            if(temp > 100){
                temp = 100;
            }
            rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180))) + 'deg)';
            rangeShow.value = Math.round(temp ) + '%';
    
            if(temp >= 50 && needToReload == false){
                // console.log("greater than 80 and false");
                var settings = {
                    "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
                    "method": "GET",
                    "timeout": 0,
                };
                $.ajax(settings).done(function(response) {
                    temp = 0;
                    var reps = response.exercise1 * 1;
                    var reps2 = response.exercise2 * 1;
                    var reps3 = response.exercise3 * 1;
                    var reps4 = response.exercise4 * 1;
                    reps = reps + 1;
                    document.getElementById("reps").innerHTML = "Reps: " + reps;
                    console.log(reps);
    
                    var myData = JSON.stringify({
                        // "domain": "www.done.com"
                        "macAddress": mac,
                        "exercise1": reps,
                        "exercise2": reps2,
                        "exercise3": reps3,
                        "exercise4": reps4
                        // "password": Base64.encode(pwd.value),
                        // "role": "ordinary"
                    });
                
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
                        url: "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
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
    
                
            } else if (temp >= 50 & needToReload == true){
                // console.log("You need to reaload");
            }
            
            if(temp <= 50){
                needToReload = false;
                // console.log("Reloaded");
            }
        });

        //     console.log(reps1);
        // console.log(reps2);
        // console.log(reps3);
        // console.log(reps4);


        

    }

    function post2(){

        let reps1, reps2, reps3, reps4;
        // console.log("Exercise1");

        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/device/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            console.log(response.units)
            var rotateClock = (response.units * 2 )/20;
            var temp = rotateClock * 100
            if(temp > 100){
                temp = 100;
            }
            rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180))) + 'deg)';
            rangeShow.value = Math.round(temp ) + '%';
    
            if(temp >= 50 && needToReload == false){
                // console.log("greater than 80 and false");
                var settings = {
                    "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
                    "method": "GET",
                    "timeout": 0,
                };
                $.ajax(settings).done(function(response) {
                    temp = 0;
                    var reps = response.exercise1 * 1;
                    var reps2 = response.exercise2 * 1;
                    var reps3 = response.exercise3 * 1;
                    var reps4 = response.exercise4 * 1;
                    reps2 = reps2 + 1;
                    document.getElementById("reps").innerHTML = "Reps: " + reps2;
                    console.log(reps2);
    
                    var myData = JSON.stringify({
                        // "domain": "www.done.com"
                        "macAddress": mac,
                        "exercise1": reps,
                        "exercise2": reps2,
                        "exercise3": reps3,
                        "exercise4": reps4
                        // "password": Base64.encode(pwd.value),
                        // "role": "ordinary"
                    });
                
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
                        url: "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
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
    
                
            } else if (temp >= 50 & needToReload == true){
                // console.log("You need to reaload");
            }
            
            if(temp <= 50){
                needToReload = false;
                // console.log("Reloaded");
            }
        });

        //     console.log(reps1);
        // console.log(reps2);
        // console.log(reps3);
        // console.log(reps4);


        

    }

    function post3(){

        let reps1, reps2, reps3, reps4;
        // console.log("Exercise1");

        var settings = {
            "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/device/" + mac,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function(response) {
            console.log(response.units)
            var rotateClock = (response.units * 2 )/20;
            var temp = rotateClock * 100
            if(temp > 100){
                temp = 100;
            }
            rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180))) + 'deg)';
            rangeShow.value = Math.round(temp ) + '%';
    
            if(temp >= 50 && needToReload == false){
                // console.log("greater than 80 and false");
                var settings = {
                    "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
                    "method": "GET",
                    "timeout": 0,
                };
                $.ajax(settings).done(function(response) {
                    temp = 0;
                    var reps = response.exercise1 * 1;
                    var reps2 = response.exercise2 * 1;
                    var reps3 = response.exercise3 * 1;
                    var reps4 = response.exercise4 * 1;
                    reps3 = reps3 + 1;
                    document.getElementById("reps").innerHTML = "Reps: " + reps3;
                    console.log(reps3);
    
                    var myData = JSON.stringify({
                        // "domain": "www.done.com"
                        "macAddress": mac,
                        "exercise1": reps,
                        "exercise2": reps2,
                        "exercise3": reps3,
                        "exercise4": reps4
                        // "password": Base64.encode(pwd.value),
                        // "role": "ordinary"
                    });
                
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
                        url: "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
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
    
                
            } else if (temp >= 50 & needToReload == true){
                // console.log("You need to reaload");
            }
            
            if(temp <= 50){
                needToReload = false;
                // console.log("Reloaded");
            }
        });

        //     console.log(reps1);
        // console.log(reps2);
        // console.log(reps3);
        // console.log(reps4);


        

    }
        
        }, 800);



        // var settings = {
        //     "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/device/" + mac,
        //     "method": "GET",
        //     "timeout": 0,
        // };
        // $.ajax(settings).done(function(response) {
        //     console.log(response.percentage)
        //     var rotateClock = (response.percentage * 2 )/20;
        //     var temp = rotateClock * 100
        //     if(temp > 100){
        //         temp = 100;
        //     }
        //     rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180))) + 'deg)';
        //     rangeShow.value = Math.round(temp ) + '%';
    
        //     if(temp >= 50 && needToReload == false){
        //         // console.log("greater than 80 and false");
        //         var settings = {
        //             "url": "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/exercises/" + mac,
        //             "method": "GET",
        //             "timeout": 0,
        //         };
        //         $.ajax(settings).done(function(response) {
        //             temp = 0;
        //             var reps = response.exercise1 * 1;
        //             reps = reps + 1;
        //             document.getElementById("reps").innerHTML = "Reps: " + reps;
        //             console.log(reps);
    
        //             var myData = JSON.stringify({
        //                 // "domain": "www.done.com"
        //                 "macAddress": mac,
        //                 "exercise1": reps,
        //                 "exercise2": 0,
        //                 "exercise3": 0,
        //                 "exercise4": 0
        //                 // "password": Base64.encode(pwd.value),
        //                 // "role": "ordinary"
        //             });
                
        //             $.ajax({
        //                 type: "POST",
        //                 dataType: "json",
        //                 // url: "https://pq38i6wtd4.execute-api.ap-southeast-1.amazonaws.com/verkoapi/adcounts/{domain}",
        //                 url: "https://yl5whaa4v4.execute-api.ap-southeast-2.amazonaws.com/vts/device/" + mac,
        //                 data: myData,
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 },
        //                 success: function(data) {
        //                     // console.log(data);
                
        //                 },
        //                 error: function(error) {
        //                     // console.log(error);
        //                 }
        //             });
        //         });
        //         needToReload = true;
    
                
        //     } else if (temp >= 50 & needToReload == true){
        //         // console.log("You need to reaload");
        //     }
            
        //     if(temp <= 50){
        //         needToReload = false;
        //         // console.log("Reloaded");
        //     }
        // });



    });
});