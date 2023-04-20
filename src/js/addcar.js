document.getElementById('addCar').addEventListener('click', addCar);


if (document.cookie.indexOf('numCars') >= 0) {
    var numCars = parseInt(getNumCars());
    if (numCars == 1) {
        document.getElementById('car-entry-1').style.display = 'block';
    } else if (numCars == 2) {
        document.getElementById('car-entry-1').style.display = 'block';
        document.getElementById('car-entry-2').style.display = 'block';
    } else if (numCars == 3) {
        document.getElementById('car-entry-1').style.display = 'block';
        document.getElementById('car-entry-2').style.display = 'block';
        document.getElementById('car-entry-3').style.display = 'block';
    } else if (numCars == 4) {
        document.getElementById('car-entry-1').style.display = 'block';
        document.getElementById('car-entry-2').style.display = 'block';
        document.getElementById('car-entry-3').style.display = 'block';
        document.getElementById('car-entry-4').style.display = 'block';
    } else if (numCars == 5) {
        document.getElementById('car-entry-1').style.display = 'block';
        document.getElementById('car-entry-2').style.display = 'block';
        document.getElementById('car-entry-3').style.display = 'block';
        document.getElementById('car-entry-4').style.display = 'block';
        document.getElementById('car-entry-5').style.display = 'block';
        document.getElementById('addCarContainer').style.display = 'none';
    }
}

// add car
function addCar() {
    //console.log("Starting with... " + getNumCars());
    var currentCarNum = parseInt(getNumCars());
    currentCarNum++;
    document.cookie = "numCars=" + currentCarNum;
    //console.log("Now with... " + getNumCars());
    if (currentCarNum == 1) {
        document.getElementById('car-entry-1').style.display = 'block';
    } else if (currentCarNum == 2) {
        document.getElementById('car-entry-2').style.display = 'block';
    } else if (currentCarNum == 3) {
        document.getElementById('car-entry-3').style.display = 'block';
    } else if (currentCarNum == 4) {
        document.getElementById('car-entry-4').style.display = 'block';
    } else if (currentCarNum == 5) {
        document.getElementById('car-entry-5').style.display = 'block';
        document.getElementById('addCarContainer').style.display = 'none';
    }
    //console.log('Adding car...');   
    ///console.log('You now have ' + currentCarNum  + ' cars.');
    
}

function getNumCars () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "numCars"){
            return cookieValueArray[1]
        }
    }
}