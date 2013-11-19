"use strict";

var makePerson = function (persArr) {

    // Funktion som sorterar namnen i alfabetisk ordning.
    persArr.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    var str = persArr.map(function (pers) {
        return pers.name;
    }).join(", ");


    // Skapar ett objekt med värdena som ska skickas tillbaks.
    var obj = {
        minAge: 0,
        maxAge: 0,
        averageAge: 0,
        names: str
    };

    return obj;
}

