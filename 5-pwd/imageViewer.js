"use strict"

var imageViewer = {
    
    objectArray: [],

    init: function (e) {

        //http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/

        // Variabler.
        var openButton = document.getElementById("button");
        var closeButton = document.getElementById("closeButton");
        var imageContainer = document.getElementById("imageContainer");
        var toggle = false;

        // Desktopknappens klickfunktion.
        openButton.onclick = function () {

            // Togglefunktion f�r menyknappen.
            switch (toggle) {
                case false:
                    imageContainer.className = "visible";
                    imageViewer.ajaxCall();
                    toggle = true;
                    break;
                case true:
                    imageContainer.className = "hidden";
                    loadingDiv.className = "hidden";
                    toggle = false;
                    break;
            }
        }

        // Bildf�nstrets klickfunktion.
        closeButton.onclick = function () {
            toggle = false;
            imageContainer.className = "hidden";
            loadingDiv.className = "hidden";
        }

    },

    // Laddar bilderna
    ajaxCall: function () {

        var objectArray = [];

        // Laddningsikon & text visas n�r ajaxanrop sker.
        var loadingDiv = document.getElementById("loadingDiv");
        loadingDiv.className = "visible";

        // AJAX-anrop f�r att h�mta bilderna.
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status <= 200 && xhr.status < 300 || xhr.status === 304) {
                    //alert(xhr.responseText);
                    objectArray = JSON.parse(xhr.responseText);
                    loadingDiv.className = "hidden";
                    imageViewer.objectArray = objectArray;
                }
                else {
                    console.log("L�sfel, status:" + xhr.status);
                }
            }
        }
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    }
};

window.onload = imageViewer.init;