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
            pcValue = pcValue.replace(/^\s+/, '').replace(/\s+$/, '');

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (pcValue === '' || isNaN(pcValue) || pcValue.length != 5) {
                Validator.errorBox(postalCode);
                Validator.postalCode = false;
            }
            else {
                Validator.correctBox(postalCode);
                Validator.postalCode = true;
            };
        };

        eMail.onblur = function () {

            // Variabel för testning av strängen.
            var checker = true;
            var emValue = eMail.value;
            emValue = emValue.replace(/^\s+/, '').replace(/\s+$/, '');

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            checker = re.test(emValue);

            //Är strängen tom eller whitespace körs errorBox. Annars körs correctBox.
            if (checker === false) {
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