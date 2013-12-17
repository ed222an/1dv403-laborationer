"use strict"

var Validator = {

    firstName: false,
    lastName: false,

    init: function (e) {

        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var postalCode = document.getElementById("postalCode");

        firstName.onblur = function () {

            // Variabel f�r testning av str�ngen.
            var fnValue = firstName.value;
            fnValue = fnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //�r str�ngen tom eller whitespace k�rs errorBox. Annars k�rs correctBox.
            if (fnValue === '') {
                Validator.errorBox(firstName);
            }
            else {
                Validator.correctBox(firstName);
            };
        };

        lastName.onblur = function () {

            // Variabel f�r testning av str�ngen.
            var lnValue = lastName.value;
            lnValue = lnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //�r str�ngen tom eller whitespace k�rs errorBox. Annars k�rs correctBox.
            if (lnValue === '') {
                Validator.errorBox(lastName);
            }
            else {
                Validator.correctBox(lastName);
            };
        };

        postalCode.onblur = function () { // L�GG TILL CHECK F�R NUMMER!!!!

            // Variabel f�r testning av str�ngen.
            var pcValue = postalCode.value;
            pcValue = pcValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //�r str�ngen tom eller whitespace k�rs errorBox. Annars k�rs correctBox.
            if (pcValue === '') {
                Validator.errorBox(postalCode);
            }
            else {
                Validator.correctBox(postalCode);
            };
        };
    },

    errorBox: function (inputBox) {

        // G�r rutan r�d.
        inputBox.className = "red";

        var text = document.createTextNode("This box must be filled out!");

        if (inputBox.id == "firstName") {
            console.log("test");
            var p = document.getElementById("pFirst");
            p.appendChild(text);
        };

    },

    correctBox: function (inputBox) {

        // G�r rutan gr�n.
        inputBox.className = "green";
    }

};
window.onload = Validator.init;