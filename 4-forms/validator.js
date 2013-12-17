"use strict"

var Validator = {

    firstName: false,
    lastName: false,

    init: function (e) {

        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var postalCode = document.getElementById("postalCode");

        firstName.onblur = function () {

            // Variabel för testning av strängen.
            var fnValue = firstName.value;
            fnValue = fnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (fnValue === '') {
                Validator.errorBox(firstName);
            }
            else {
                Validator.correctBox(firstName);
            };
        };

        lastName.onblur = function () {

            // Variabel för testning av strängen.
            var lnValue = lastName.value;
            lnValue = lnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (lnValue === '') {
                Validator.errorBox(lastName);
            }
            else {
                Validator.correctBox(lastName);
            };
        };

        postalCode.onblur = function () { // LÄGG TILL CHECK FÖR NUMMER!!!!

            // Variabel för testning av strängen.
            var pcValue = postalCode.value;
            pcValue = pcValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (pcValue === '') {
                Validator.errorBox(postalCode);
            }
            else {
                Validator.correctBox(postalCode);
            };
        };
    },

    errorBox: function (inputBox) {

        // Gör rutan röd.
        inputBox.className = "red";

        var text = document.createTextNode("This box must be filled out!");

        if (inputBox.id == "firstName") {
            console.log("test");
            var p = document.getElementById("pFirst");
            p.appendChild(text);
        };

    },

    correctBox: function (inputBox) {

        // Gör rutan grön.
        inputBox.className = "green";
    }

};
window.onload = Validator.init;