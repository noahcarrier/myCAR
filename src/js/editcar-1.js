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
        document.cookie = "car1Name=" + carName;
    }
    if (carMake != "") {
    // set car1 make
    document.cookie = "car1Make=" + carMake;
    }
    if (carModel != "") {
        // set car1 model
        document.cookie = "car1Model=" + carModel;
    }
    if (carYear != "") {
        // set car1 year
        document.cookie = "car1Year=" + carYear;
    }
    if (carPurchased != "") {
        // set car1 purchased
        document.cookie = "car1Purchased=" + carPurchased;
    }
    if (carMiles != "") {
        // set car1 miles
        document.cookie = "car1Miles=" + carMiles;
    }
    if (carNextOilChange != "") {
        // set car1 next oil change
        document.cookie = "car1NextOilChange=" + carNextOilChange;
    }

    // get current date
    var currentDate = new Date().toLocaleString();

    // set car last updated
    document.cookie = "car1LastUpdated=" + currentDate;


    alert("Car details updated");
}