function deleteAccount () {
    var deleteAccount = false;
    var verifyPassword = prompt("Confirm your account deletion by typing your password:");
    var password = getPassword();
    if (verifyPassword === password) {
        deleteAccount = confirm("Are you sure you want to delete your account?");
    }
    else {
        alert("Incorrect password");
    }
    if (deleteAccount) {
        eraseCookieFromAllPaths("username");
        eraseCookieFromAllPaths("password");
        eraseCookieFromAllPaths("lastName");
        eraseCookieFromAllPaths("firstName");
        eraseCookieFromAllPaths("numCars");
        eraseCookieFromAllPaths("car1Name");
        eraseCookieFromAllPaths("car1Make");
        eraseCookieFromAllPaths("car1Model");
        eraseCookieFromAllPaths("car1Year");
        eraseCookieFromAllPaths("car1NextOilChange");
        eraseCookieFromAllPaths("car1Miles");
        eraseCookieFromAllPaths("car1Purchased");
        eraseCookieFromAllPaths("car2Name");
        eraseCookieFromAllPaths("car2Make");
        eraseCookieFromAllPaths("car2Model");
        eraseCookieFromAllPaths("car2Year");
        eraseCookieFromAllPaths("car2NextOilChange");
        eraseCookieFromAllPaths("car2Miles");
        eraseCookieFromAllPaths("car2Purchased");
        eraseCookieFromAllPaths("car3Name");
        eraseCookieFromAllPaths("car3Make");
        eraseCookieFromAllPaths("car3Model");
        eraseCookieFromAllPaths("car3Year");
        eraseCookieFromAllPaths("car3NextOilChange");
        eraseCookieFromAllPaths("car3Miles");
        eraseCookieFromAllPaths("car3Purchased");
        eraseCookieFromAllPaths("car4Name");
        eraseCookieFromAllPaths("car4Make");
        eraseCookieFromAllPaths("car4Model");
        eraseCookieFromAllPaths("car4Year");
        eraseCookieFromAllPaths("car4NextOilChange");
        eraseCookieFromAllPaths("car4Miles");
        eraseCookieFromAllPaths("car4Purchased");
        eraseCookieFromAllPaths("car5Name");
        eraseCookieFromAllPaths("car5Make");
        eraseCookieFromAllPaths("car5Model");
        eraseCookieFromAllPaths("car5Year");
        eraseCookieFromAllPaths("car5NextOilChange");
        eraseCookieFromAllPaths("car5Miles");
        eraseCookieFromAllPaths("car5Purchased");
        
        window.location.href = "index.html";
    } else { 
        console.log("Delete account cancelled");
    }
}

function eraseCookieFromAllPaths(name) {
    // This function will attempt to remove a cookie from all paths.
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
}


function getPassword () {
    var credentials = document.cookie.split("; ");
    for (var i = 0; i < credentials.length; i++){
        var cookieValueArray = credentials[i].split("=");
    
        if (cookieValueArray[0] == "password"){
            return cookieValueArray[1]
        }
    }
}