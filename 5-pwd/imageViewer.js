"use strict"

var imageContainer = {

    init: function (e) {

        // Variabler.
        var openButton = document.getElementById("button");
        var closeButton = document.getElementById("closeButton");
        var imageContainer = document.getElementById("imageContainer");
        var toggle = false;

        // Desktopknappens klickfunktion.
        openButton.onclick = function () {

            // Togglefunktion f�r menyknappen.
            switch(toggle)
            {
                case false:
                    imageContainer.className = "visible";
                    toggle = true;
                    break;
                case true:
                    imageContainer.className = "hidden";
                    toggle = false;
                    break;
            }
        }

        // Bildf�nstrets klickfunktion.
        closeButton.onclick = function () {
            toggle = false;
            imageContainer.className = "hidden";
        }

    }
};

window.onload = imageContainer.init;