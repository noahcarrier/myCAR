function editcar() {
    var carName = document.getElementById("carName").value;
    var carMake = document.getElementById("carMake").value;
    var carModel = document.getElementById("carModel").value;
    var carYear = document.getElementById("carYear").value;
    var carPurchased = document.getElementById("carPurchased").value;
    var carMiles = document.getElementById("carMiles").value;
    var carNextOilChange = document.getElementById("carNextOilChange").value;

    // set car1 name
    document.cookie = "car5Name=" + carName;
    // set car1 make
    document.cookie = "car5Make=" + carMake;
    // set car1 model
    document.cookie = "car5Model=" + carModel;
    // set car1 year
    document.cookie = "car5Year=" + carYear;
    // set car1 purchased
    document.cookie = "car5Purchased=" + carPurchased;
    // set car1 miles
    document.cookie = "car5Miles=" + carMiles;
    // set car1 next oil change
    document.cookie = "car5NextOilChange=" + carNextOilChange;


    alert("Car details updated");
}