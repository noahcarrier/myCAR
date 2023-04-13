
function changeaccount () {
    console.log("changeaccount.js loaded");
    // get cookie "password"
    var password = getPassword();
    var oldPassword = document.getElementById("currentPassword").value;
    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // if oldPassword is not equal to password cookie
    if (oldPassword !== password) {
        alert("Correct current password must be entered to make changes");
    }
    else {
        if (newPassword !== "") {
            if (newPassword === confirmPassword) {
                // set cookie "password" to newPassword
                document.cookie = "password=" + newPassword;
                //alert("Password changed successfully");
            }
            else {
                alert("New passwords do not match");
            }
        }
        if (username !== "") {
            // set cookie "username" to username
            document.cookie = "username=" + username;
            //alert("Username changed successfully");
        }
        if (firstName !== "") {
            // set cookie "firstName" to firstName
            document.cookie = "firstName=" + firstName;
            ///alert("First name changed successfully");
        }
        if (lastName !== "") {
            // set cookie "lastName" to lastName
            document.cookie = "lastName=" + lastName;
            //alert("Last name changed successfully");
        }
        alert("Account information changed successfully");
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