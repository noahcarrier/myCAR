function editcar() {
    var carName = document.getElementById("carName").value;
    var carMake = document.getElementById("carMake").value;
    var carModel = document.getElementById("carModel").value;
    var carYear = document.getElementById("carYear").value;
    var carPurchased = document.getElementById("carPurchased").value;
    var carMiles = document.getElementById("carMiles").value;
    var carNextOilChange = document.getElementById("carNextOilChange").value;

    if (carName != "") {
        // set car1 name
        document.cookie = "car3Name=" + carName;
    }
    if (carMake != "") {
    // set car1 make
    document.cookie = "car3Make=" + carMake;
    }
    if (carModel != "") {
        // set car1 model
        document.cookie = "car3Model=" + carModel;
    }
    if (carYear != "") {
        // set car1 year
        document.cookie = "car3Year=" + carYear;
    }
    if (carPurchased != "") {
        // set car1 purchased
        document.cookie = "car3Purchased=" + carPurchased;
    }
    if (carMiles != "") {
        // set car1 miles
        document.cookie = "car3Miles=" + carMiles;
    }
    if (carNextOilChange != "") {
        // set car1 next oil change
        document.cookie = "car3NextOilChange=" + carNextOilChange;
    }

    // get current date
    var currentDate = new Date().toLocaleString();


    // set car last updated
    document.cookie = "car3LastUpdated=" + currentDate;

    alert("Car details updated");
}