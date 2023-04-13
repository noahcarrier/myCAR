function deleteAccount () {
    if (confirm("Delete this account permanently?")) {
        eraseCookieFromAllPaths("username");
        eraseCookieFromAllPaths("password");
        eraseCookieFromAllPaths("lastName");
        eraseCookieFromAllPaths("firstName");
        eraseCookieFromAllPaths("numCars");
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
