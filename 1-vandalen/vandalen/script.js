"use strict";

var makePerson = function (persArr) {

    // Skapar en array med enbart de medskickade namnen.
    for (var i = 0; i < persArr.length; i++) {
        var names = persArr[i].name;
    }


    // Funktion som sorterar namnen i alfabetisk ordning.
    var sortedNames = persArr.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    console.log(sortedNames[0],sortedNames[1],sortedNames[2]); // kollar så att namnen är sorterade.

    // Skapar ett objekt med värdena som ska skickas tillbaks.
    var obj = {
        minAge: 0,
        maxAge: 0,
        averageAge: 0,
        names: ''
    };

    return obj;
}

