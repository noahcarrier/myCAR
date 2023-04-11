var milesToNextOilChange = 5000;

  function notifyOilChange () {
    
    // wait one second
    // get numCars
var numCars = (document.cookie.indexOf('numCars') >= 0) ? parseInt(document.cookie.split('=')[1]) : 0;

      // check if the user has granted permission for notifications
    if (milesToNextOilChange >= 5000 && numCars > 0) {

        alert("Looks like you may be due for an oil change!\n--------------------------------------------\nPlease update your miles to next oil change in your car's details once you've had your oil changed.");
    }
  } 

  window.onload = function () {
    notifyOilChange();
  }