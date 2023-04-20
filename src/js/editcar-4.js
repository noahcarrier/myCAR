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
        document.cookie = "car4Name=" + carName;
    }
    if (carMake != "") {
    // set car1 make
    document.cookie = "car4Make=" + carMake;
    }
    if (carModel != "") {
        // set car1 model
        document.cookie = "car4Model=" + carModel;
    }
    if (carYear != "") {
        // set car1 year
        document.cookie = "car4Year=" + carYear;
    }
    if (carPurchased != "") {
        // set car1 purchased
        document.cookie = "car4Purchased=" + carPurchased;
    }
    if (carMiles != "") {
        // set car1 miles
        document.cookie = "car4Miles=" + carMiles;
    }
    if (carNextOilChange != "") {
        // set car1 next oil change
        document.cookie = "car4NextOilChange=" + carNextOilChange;
    }

    // get current date
    var currentDate = new Date().toLocaleString();


    // set car last updated
    document.cookie = "car4LastUpdated=" + currentDate;

    alert("Car details updated");
}