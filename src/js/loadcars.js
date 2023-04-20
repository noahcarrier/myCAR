console.log("Loading cars...")

for (var i = 1; i <= parseInt(getNumCars()); i++) {
    document.getElementById("car-entry-" + i).style.display = "block";
    document.getElementById("car1name").innerHTML = getCarName(i);
    //console.log(getCarName(1));
    document.getElementById("car1make").innerHTML = getCarMake(i);
    //console.log(getCarMake(1));
    document.getElementById("car1model").innerHTML = getCarModel(i);
    //console.log(getCarModel(1));
    document.getElementById("car1year").innerHTML = getCarYear(i);
    //console.log(getCarYear(1));
    document.getElementById("car1miles").innerHTML = getCarMiles(i);
    //console.log(getCarMiles(1));
    document.getElementById("car1nextoilchange").innerHTML = getCarNextOilChange(i);
    //console.log(getCarNextOilChange(1));
    document.getElementById("car1purchased").innerHTML = getCarPurchased(i);
    //console.log(getCarPurchased(1));
    console.log("Loaded car " + getCarName(i));
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


