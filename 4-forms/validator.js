"use strict"

var Validator = {

    firstName: false,
    lastName: false,
    postalCode: false,
    eMail: false,

    init: function (e) {

        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var postalCode = document.getElementById("postalCode");
        var eMail = document.getElementById("eMail");

        firstName.onblur = function () {

            // Variabel för testning av strängen.
            var fnValue = firstName.value;
            fnValue = fnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (fnValue === '') {
                Validator.errorBox(firstName);
                Validator.firstName = false;
            }
            else {
                Validator.correctBox(firstName);
                Validator.firstName = true;
            };
        };

        lastName.onblur = function () {

            // Variabel för testning av strängen.
            var lnValue = lastName.value;
            lnValue = lnValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (lnValue === ''|| !(isNaN(lnValue))) {
                Validator.errorBox(lastName);
                Validator.lastName = false;
            }
            else {
                Validator.correctBox(lastName);
                Validator.lastName = true;
            };
        };

        postalCode.onblur = function () {

            // Variabel för testning av strängen.
            var pcValue = postalCode.value;
            var format = /^([SE]*)\s*(\d{3})[\s\-]*(\d\d)$/;

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (format.test(pcValue) === false) {
                Validator.errorBox(postalCode);
                Validator.postalCode = false;
            }
            else {
                pcValue = pcValue.replace(format, "$2$3");
                Validator.correctBox(postalCode);
                Validator.postalCode = true;
            };
        };

        eMail.onblur = function () {

            // Variabel för testning av strängen.
            var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (check.test(eMail.value) === false) {
                Validator.errorBox(eMail);
                Validator.eMail = false;
            }
            else {
                Validator.correctBox(eMail);
                Validator.eMail = true;
            };
        };
    },

    errorBox: function (inputBox) {


        if (inputBox.className != "red") {

            // Gör rutan röd.
            inputBox.className = "red";

            var text;

            // Visar felmeddelande.
            if (inputBox.id === "firstName") {
                var div = document.getElementById("first");
                div.className = "red";
                text = document.createTextNode("Type your first name");
                div.appendChild(text);
            };

            if (inputBox.id === "lastName") {
                var div = document.getElementById("last");
                div.className = "red";
                text = document.createTextNode("Type your last name");
                div.appendChild(text);
            };

            if (inputBox.id === "postalCode") {
                var div = document.getElementById("code");
                div.className = "red";
                text = document.createTextNode("Type your 5-digit postal code.");
                div.appendChild(text);
            };

            if (inputBox.id === "eMail") {
                var div = document.getElementById("mail");
                div.className = "red";
                text = document.createTextNode("Type your e-mail.");
                div.appendChild(text);
            };
        };

    },

    correctBox: function (inputBox) {

        if (inputBox.className != "green") {

            // Gör rutan grön.
            inputBox.className = "green";

            // Tar bort eventuellt felmeddelande.
            if (inputBox.id === "firstName") {
                var divText = document.getElementById("first");
                while (divText.firstChild) {
                    divText.removeChild(divText.firstChild);
                };
            };

            if (inputBox.id === "lastName") {
                var divText = document.getElementById("last");
                while (divText.firstChild) {
                    divText.removeChild(divText.firstChild);
                };
            };

            if (inputBox.id === "postalCode") {
                var divText = document.getElementById("code");
                while (divText.firstChild) {
                    divText.removeChild(divText.firstChild);
                };
            };

            if (inputBox.id === "eMail") {
                var divText = document.getElementById("mail");
                while (divText.firstChild) {
                    divText.removeChild(divText.firstChild);
                };
            };

        };
    }

};
window.onload = Validator.init;