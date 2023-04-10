var milesToNextOilChange = 5000;

  function notifyOilChange () {
    
    // wait one second

      // check if the user has granted permission for notifications
    if (milesToNextOilChange >= 5000) {

        alert("You've hit another 5000 miles, time to get an oil change!");
    }
  } 

  window.onload = function () {
    notifyOilChange();
  }