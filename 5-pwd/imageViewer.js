"use strict"

var imageViewer = {

    init: function (e) {

        // Variabler.
        var openButton = document.getElementById("button");
        var closeButton = document.getElementById("closeButton");
        var imageContainer = document.getElementById("imageContainer");
        var imageBox = document.getElementById("imageBox");
        var toggle = false;

        // Desktopknappens klickfunktion.
        openButton.onclick = function () {

            // Togglefunktion för menyknappen.
            switch (toggle) {
                case false:
                    imageContainer.className = "visible";
                    imageViewer.ajaxCall();
                    toggle = true;
                    break;
                case true:
                    imageContainer.className = "hidden";
                    loadingDiv.className = "hidden";
                    imageBox.innerHTML = "";
                    toggle = false;
                    break;
            }
        }

        // Bildfönstrets klickfunktion.
        closeButton.onclick = function () {
            toggle = false;
            imageBox.innerHTML = "";
            imageContainer.className = "hidden";
            loadingDiv.className = "hidden";
        }

    },

    // Laddar bilderna
    ajaxCall: function () {

        var objectArray = [];

        // Laddningsikon & text visas när ajaxanrop sker.
        var loadingDiv = document.getElementById("loadingDiv");
        loadingDiv.className = "visible";

        // AJAX-anrop för att hämta bilderna.
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status <= 200 && xhr.status < 300 || xhr.status === 304) {

                    // Tolkar JSON, gömmer laddningsgifen & skickar med arrayen med objekt till nästa funktion.
                    objectArray = JSON.parse(xhr.responseText);
                    loadingDiv.className = "hidden";
                    imageViewer.showPics(objectArray);
                }
                else {
                    console.log("Läsfel, status:" + xhr.status);
                }
            }
        }
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },

    // Visar bilderna i fönstret.
    showPics: function (objectArray) {

        var imageBox = document.getElementById("imageBox");
        var desktop = document.getElementById("desktop");
        var maxHeight = 0;
        var maxWidth = 0;
        console.log(objectArray);

        // Loopar igenom arrayen förr att ta ut maxvärdena.
        for (var i = 0; i < objectArray.length; i++) {

            if (maxHeight < objectArray[i].thumbHeight) {
                maxHeight = objectArray[i].thumbHeight;
            }
            if (maxWidth < objectArray[i].thumbWidth) {
                maxWidth = objectArray[i].thumbWidth;
            }
        }

        // Loopar igenom objectArray och lägger till bilderna i fönstret.
        for (var i = 0; i < objectArray.length; i++) {

            var URL = objectArray[i].URL;
            var imgDiv = document.createElement("div");
            var aTag = document.createElement("a");
            var img = document.createElement("img")

            imgDiv.style.height = maxHeight + "px";
            imgDiv.style.width = maxWidth + "px";
            aTag.href = "#";
            img.src = objectArray[i].thumbURL;

            aTag.appendChild(img);
            imgDiv.appendChild(aTag);
            imageBox.appendChild(imgDiv);

            imageViewer.switchBackground(URL, aTag);
        }
    },

    switchBackground: function (URL, aTag) {

        // Klickfunktion för bilderna, byter bakgrund på desktopen
        aTag.onclick = function (URL, aTag) {
            return function () {
                desktop.style.backgroundImage = "url(" + URL + ")";
            }
        }(URL, aTag);

    }
};

window.onload = imageViewer.init;