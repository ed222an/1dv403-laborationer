"use strict"

var Validator = {

    firstName: false,
    lastName: false,

    init: function (e) {

        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var postalCode = document.getElementById("postalCode");

        firstName.onblur = function () {

            // Variabel f�r testning av tom str�ng.
            var fnValue = firstName.value;

            fnValue = fnValue.replace(/^\s+/, '').replace(/\s+$/, '');
            if (fnValue === '') {
                // Texten var bara whitespace.
                console.log("Firstname = whitespace");
            };
        };

        lastName.onblur = function () {

            // Variabel f�r testning av tom str�ng.
            var lnValue = lastName.value;

            lnValue = lnValue.replace(/^\s+/, '').replace(/\s+$/, '');
            if (lnValue === '') {
                // Texten var bara whitespace.
                console.log("Lastname = whitespace");
            };
        };

        postalCode.onblur = function () { // L�GG TILL CHECK F�R NUMMER!!!!

            // Variabel f�r testning av tom str�ng.
            var pcValue = postalCode.value;

            pcValue = pcValue.replace(/^\s+/, '').replace(/\s+$/, '');
            if (pcValue === '') {
                // Texten var bara whitespace.
                console.log("Postalcode = whitespace");
            };
        };
    }

};
window.onload = Validator.init;