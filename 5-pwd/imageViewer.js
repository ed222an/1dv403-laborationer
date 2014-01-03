"use strict"

var imageContainer = {

    init: function (e) {

        // Variabler.
        var openButton = document.getElementById("button");
        var closeButton = document.getElementById("closeButton");
        var imageContainer = document.getElementById("imageContainer");

        // Desktopknappens klickfunktion.
        openButton.onclick = function () {

            imageContainer.className = "visible";
        }

        // Bildfönstrets klickfunktion.
        closeButton.onclick = function () {

            imageContainer.className = "hidden";
        }

    }
};

window.onload = imageContainer.init;