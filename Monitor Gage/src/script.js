'use strict';

  var rangeMeter = document.querySelector('#range');
  var rangeShow = document.querySelector("#show");
  var rangeClock =  document.querySelector('.meter-clock');

  function rangeChange() {
    var rotateClock = rangeMeter.value;

    rangeClock.style.transform = 'rotate(' + (-90 + ((rotateClock * 180) / 100)) + 'deg)';
    rangeShow.value = rotateClock + '%';
  }

	rangeMeter.addEventListener('input', rangeChange);