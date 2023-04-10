document.getElementById('addCar').addEventListener('click', addCar);

            


function addCar() {
    var numCars;
    var cookieValueArray;
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        cookieValueArray = credentials[i].split("=");
       
        if (cookieValueArray[0] == "numCars"){
            if (cookieValueArray[1] > 0) {  break;  }
            if(isNaN(cookieValueArray[1]) || cookieValueArray[1] == "" || cookieValueArray[1] == 0 || cookieValueArray[1] == null || cookieValueArray[1] == undefined){
                numCars = 0;
                numCars++;
                document.cookie = "numCars=" + numCars;
                console.log(numCars);
                console.log('Adding car...');   
                console.log('You now have ' + numCars  + ' cars.');
                return;
            }
        }
    }

    

    console.log(cookies);

    for (var j = 0; j < cookies.length; j++) {
        cookieValueArray = credentials[j].split("=");
       
        if (cookieValueArray[0] == "numCars"){
            numCars = cookieValueArray[1];

        }
    }


    if (numCars >= 5) {
        alert("You can't have more than 5 cars!\n\nPlease delete a car before adding a new one.");
        return;
    }

    numCars++;

    document.cookie = "numCars=" + numCars;
    console.log('Adding car...');   
    console.log('You now have ' + numCars  + ' cars.');
    
    //location.reload();
}

