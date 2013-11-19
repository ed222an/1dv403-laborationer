"use strict";

var makePerson = function (persArr) {

    // Tar fram maxvärdet av åldrarna i arrayen.
    var max = Math.max.apply(null,
                            Object.keys(persArr).map(function (e) {
                                return persArr[e]['age'];
                            }));

    // Tar fram minvärdet av åldrarna i arrayen.
    var min = Math.min.apply(null,
                            Object.keys(persArr).map(function (e) {
                                return persArr[e]['age'];
                            }));

    // Tar fram medelvärdet av åldrarna i arrayen.
    var sum = 0;

    for (var i = 0; i < persArr.length; i++) {
        sum += parseInt(persArr[i].age);
    }

    var avg = Math.round(sum / persArr.length);

    // Funktion som sorterar namnen i alfabetisk ordning.
    persArr.sort(function (a, b) {
        return a.name.localeCompare(b.name)
    });

    // Skapar en sträng utav de sorterade namnen.
    var str = persArr.map(function (pers) {
        return pers.name;
    }).join(", ");

    // Skapar ett objekt med värdena som ska skickas tillbaks.
    var obj = {
        minAge: min,
        maxAge: max,
        averageAge: avg,
        names: str
    };

    return obj;
}

