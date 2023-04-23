var milesToNextOilChange = 5000;

  function notifyOilChange () {
    
    // wait one second
    // get numCars
    var numCars = (document.cookie.indexOf('numCars') >= 0) ? parseInt(document.cookie.split('=')[1]) : 0;

    var createAlert = false;

    var oilChangeRecommendedcar1 = false;
    var oilChangeRecommendedcar2 = false;
    var oilChangeRecommendedcar3 = false;
    var oilChangeRecommendedcar4 = false;
    var oilChangeRecommendedcar5 = false;
    var message = "Looks like you may be due for an oil change soon!\n\nThe following vehicles are due for an oil change:\n\n--------------------------------------------\n";
    // get car1NextOilChange
    if(getCar1NextOilChange() < 50) {
        oilChangeRecommendedcar1 = true;
        createAlert = true;
        message += getCar1Name() + ", Miles to next oil change: " + getCar1NextOilChange() + "\n";
    }
    if(getCar2NextOilChange() < 50) {
        oilChangeRecommendedcar2 = true;
        createAlert = true;
        message += getCar2Name() + ", Miles to next oil change: " + getCar2NextOilChange() + "\n";
    }
    if(getCar3NextOilChange() < 50) {
        oilChangeRecommendedcar3 = true;
        createAlert = true;
        message += getCar3Name() + ", Miles to next oil change: " + getCar3NextOilChange() + "\n";
    }
    if(getCar4NextOilChange() < 50) {
        oilChangeRecommendedcar4 = true;
        createAlert = true;
        message += getCar4Name() + ", Miles to next oil change: " + getCar4NextOilChange() + "\n";
    }
    if(getCar5NextOilChange() < 50) {
        oilChangeRecommendedcar5 = true;
        createAlert = true;
        message += getCar5Name() + ", Miles to next oil change: " + getCar5NextOilChange() + "\n";
    }

    message += "--------------------------------------------\nDon't forget to update your mileage after your next oil change!"

    // get milesToNextOilCha
      // check if the user has granted permission for notifications
    if (createAlert) {
      alert(message)
    }
  } 

  window.onload = function () {
    notifyOilChange();
  }


  function getCar1NextOilChange () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car1NextOilChange"){
            return cookieValueArray[1]
        }
    }
}

function getCar2NextOilChange () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car2NextOilChange"){
            return cookieValueArray[1]
        }
    }
}

function getCar3NextOilChange () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car3NextOilChange"){
            return cookieValueArray[1]
        }
    }
}

function getCar4NextOilChange () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car4NextOilChange"){
            return cookieValueArray[1]
        }
    }
}

function getCar5NextOilChange () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car5NextOilChange"){
            return cookieValueArray[1]
        }
    }
}
  

// getCar1Name
function getCar1Name () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car1Name"){
            return cookieValueArray[1]
        }
    }
}

// getCar2Name
function getCar2Name () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car2Name"){
            return cookieValueArray[1]
        }
    }
}

// getCar3Name
function getCar3Name () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car3Name"){
            return cookieValueArray[1]
        }
    }
}

// getCar4Name
function getCar4Name () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car4Name"){
            return cookieValueArray[1]
        }
    }
}

// getCar5Name
function getCar5Name () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");

        if (cookieValueArray[0] == "car5Name"){
            return cookieValueArray[1]
        }
    }
}