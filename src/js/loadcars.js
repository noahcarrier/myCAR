console.log("Loading cars...")

    if (parseInt(getNumCars()) >= 1) {
        document.getElementById("car-entry-1").style.display = "block";
        document.getElementById("car1name").innerHTML = getCarName(1).toString();
        document.getElementById("car1make").innerHTML = getCarMake(1).toString();
        document.getElementById("car1model").innerHTML = getCarModel(1).toString();
        document.getElementById("car1year").innerHTML = getCarYear(1).toString();
        document.getElementById("car1miles").innerHTML = getCarMiles(1).toString();
        document.getElementById("car1nextoilchange").innerHTML = getCarNextOilChange(1).toString();
        document.getElementById("car1purchased").innerHTML = getCarPurchased(1).toString();
        document.getElementById("car1updated").innerHTML = getCarUpdated(1).toString();
        console.log("Loaded car 1");
    }
    if (parseInt(getNumCars()) >= 2) {
        document.getElementById("car-entry-2").style.display = "block";
        document.getElementById("car2name").innerHTML = getCarName(2).toString();
        document.getElementById("car2make").innerHTML = getCarMake(2).toString();
        document.getElementById("car2model").innerHTML = getCarModel(2).toString();
        document.getElementById("car2year").innerHTML = getCarYear(2).toString();
        document.getElementById("car2miles").innerHTML = getCarMiles(2).toString();
        document.getElementById("car2nextoilchange").innerHTML = getCarNextOilChange(2).toString();
        document.getElementById("car2purchased").innerHTML = getCarPurchased(2).toString();
        document.getElementById("car2updated").innerHTML = getCarUpdated(2).toString();
        console.log("Loaded car 2");
    }
    if (parseInt(getNumCars()) >= 3) {
        document.getElementById("car-entry-3").style.display = "block";
        document.getElementById("car3name").innerHTML = getCarName(3).toString();
        document.getElementById("car3make").innerHTML = getCarMake(3).toString();
        document.getElementById("car3model").innerHTML = getCarModel(3).toString();
        document.getElementById("car3year").innerHTML = getCarYear(3).toString();
        document.getElementById("car3miles").innerHTML = getCarMiles(3).toString();
        document.getElementById("car3nextoilchange").innerHTML = getCarNextOilChange(3).toString();
        document.getElementById("car3purchased").innerHTML = getCarPurchased(3).toString();
        document.getElementById("car3updated").innerHTML = getCarUpdated(3).toString();
        console.log("Loaded car 3");
    }
    if (parseInt(getNumCars()) >= 4) {
        document.getElementById("car-entry-4").style.display = "block";
        document.getElementById("car4name").innerHTML = getCarName(4).toString();
        document.getElementById("car4make").innerHTML = getCarMake(4).toString();
        document.getElementById("car4model").innerHTML = getCarModel(4).toString();
        document.getElementById("car4year").innerHTML = getCarYear(4).toString();
        document.getElementById("car4miles").innerHTML = getCarMiles(4).toString();
        document.getElementById("car4nextoilchange").innerHTML = getCarNextOilChange(4).toString();
        document.getElementById("car4purchased").innerHTML = getCarPurchased(4).toString();
        document.getElementById("car4updated").innerHTML = getCarUpdated(4).toString();
        console.log("Loaded car 4");
    }
    if (parseInt(getNumCars()) == 5) {
        document.getElementById("car-entry-5").style.display = "block";
        document.getElementById("car5name").innerHTML = getCarName(5).toString();
        document.getElementById("car5make").innerHTML = getCarMake(5).toString();
        document.getElementById("car5model").innerHTML = getCarModel(5).toString();
        document.getElementById("car5year").innerHTML = getCarYear(5).toString();
        document.getElementById("car5miles").innerHTML = getCarMiles(5).toString();
        document.getElementById("car5nextoilchange").innerHTML = getCarNextOilChange(5).toString();
        document.getElementById("car5purchased").innerHTML = getCarPurchased(5).toString();
        document.getElementById("car5updated").innerHTML = getCarUpdated(5).toString();
        console.log("Loaded car 5");
    }
if (getNumCars() == "NaN") {
    document.cookie = "numCars=0";
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


function getCarName (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Name"){
            return cookieValueArray[1]
        }
    }
}

function getCarMake (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Make"){
            return cookieValueArray[1]
        }
    }
}

function getCarModel (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Model"){
            return cookieValueArray[1]
        }
    }
}

function getCarYear (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Year"){
            return cookieValueArray[1]
        }
    }
}

function getCarMiles (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Miles"){
            return cookieValueArray[1]
        }
    }
}

function getCarNextOilChange (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "NextOilChange"){
            return cookieValueArray[1]
        }
    }
}

function getCarPurchased (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "Purchased"){
            return cookieValueArray[1]
        }
    }
}

function getCarUpdated (carNumber) {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "car" + carNumber + "LastUpdated"){
            return cookieValueArray[1]
        }
    }
}


