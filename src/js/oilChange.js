var milesToNextOilChange = 5000;

  function notifyOilChange () {
    
    // wait one second
    // get numCars
var numCars = (document.cookie.indexOf('numCars') >= 0) ? parseInt(document.cookie.split('=')[1]) : 0;

      // check if the user has granted permission for notifications
    if (milesToNextOilChange >= 5000 && numCars > 0) {

        alert("You've hit another 5000 miles, time to get an oil change!");
    }
  } 

  window.onload = function () {
    notifyOilChange();
  }