document.getElementById('addCar').addEventListener('click', addCar);

var numCars = 0;

if (document.cookie.indexOf('numCars') >= 0) {
    numCars = parseInt(document.cookie.split('=')[1]);
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
    numCars++;
    document.cookie = "numCars=" + numCars;

    if (numCars == 1) {
        document.getElementById('car-entry-1').style.display = 'block';
    } else if (numCars == 2) {
        document.getElementById('car-entry-2').style.display = 'block';
    } else if (numCars == 3) {
        document.getElementById('car-entry-3').style.display = 'block';
    } else if (numCars == 4) {
        document.getElementById('car-entry-4').style.display = 'block';
    } else if (numCars == 5) {
        document.getElementById('car-entry-5').style.display = 'block';
        document.getElementById('addCarContainer').style.display = 'none';
    }
    document.cookie = "numCars=" + numCars;
    console.log('Adding car...');   
    console.log('You now have ' + numCars  + ' cars.');
    
}

