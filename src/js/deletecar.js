document.getElementById('delete-car-1').addEventListener('click', deleteCar1);
document.getElementById('delete-car-2').addEventListener('click', deleteCar2);
document.getElementById('delete-car-3').addEventListener('click', deleteCar3);
document.getElementById('delete-car-4').addEventListener('click', deleteCar4);
document.getElementById('delete-car-5').addEventListener('click', deleteCar5);
// get numCars from cookies and set it to numCars
var numCars = (document.cookie.indexOf('numCars') >= 0) ? parseInt(document.cookie.split('=')[1]) : 0;

function deleteCar1() {
    document.getElementById('car-entry-1').style.display = 'none';
    numCars--;
    document.cookie = "numCars=" + numCars;
}

function deleteCar2() {
    document.getElementById('car-entry-2').style.display = 'none';
    numCars--;
    document.cookie = "numCars=" + numCars;
}

function deleteCar3() {
    document.getElementById('car-entry-3').style.display = 'none';
    numCars--;
    document.cookie = "numCars=" + numCars;
}

function deleteCar4() {
    document.getElementById('car-entry-4').style.display = 'none';
    numCars--;
    document.cookie = "numCars=" + numCars;
}

function deleteCar5() {
    document.getElementById('car-entry-5').style.display = 'none';
    numCars--;
    document.cookie = "numCars=" + numCars;
}
