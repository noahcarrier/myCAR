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
        document.cookie = "car2Name=" + carName;
    }
    if (carMake != "") {
    // set car1 make
    document.cookie = "car2Make=" + carMake;
    }
    if (carModel != "") {
        // set car1 model
        document.cookie = "car2Model=" + carModel;
    }
    if (carYear != "") {
        // set car1 year
        document.cookie = "car2Year=" + carYear;
    }
    if (carPurchased != "") {
        // set car1 purchased
        document.cookie = "car2Purchased=" + carPurchased;
    }
    if (carMiles != "") {
        // set car1 miles
        document.cookie = "car2Miles=" + carMiles;
    }
    if (carNextOilChange != "") {
        // set car1 next oil change
        document.cookie = "car2NextOilChange=" + carNextOilChange;
    }

    // get current date
    var currentDate = new Date().toLocaleString();

    
    // set car last updated
    document.cookie = "car2LastUpdated=" + currentDate;

    alert("Car details updated");
}