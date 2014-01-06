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
                    imageBox.innerHTML = "";
                    toggle = false;
                    break;
            }
        }

        // Bildf�nstrets klickfunktion.
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

        // Laddningsikon & text visas n�r ajaxanrop sker.
        var loadingDiv = document.getElementById("loadingDiv");
        loadingDiv.className = "visible";

        // AJAX-anrop f�r att h�mta bilderna.
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status <= 200 && xhr.status < 300 || xhr.status === 304) {

                    // Tolkar JSON, g�mmer laddningsgifen & skickar med arrayen med objekt till n�sta funktion.
                    objectArray = JSON.parse(xhr.responseText);
                    loadingDiv.className = "hidden";
                    imageViewer.showPics(objectArray);
                }
                else {
                    console.log("L�sfel, status:" + xhr.status);
                }
            }
        }
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },

    // Visar bilderna i f�nstret.
    showPics: function (objectArray) {

        var imageBox = document.getElementById("imageBox");
        var maxHeight = 0;
        var maxWidth = 0;
        console.log(objectArray);

        // Loopar igenom arrayen f�rr att ta ut maxv�rdena.
        for (var i = 0; i < objectArray.length; i++) {

            if (maxHeight < objectArray[i].thumbHeight) {
                maxHeight = objectArray[i].thumbHeight;
            }
            if (maxWidth < objectArray[i].thumbWidth) {
                maxWidth = objectArray[i].thumbWidth;
            }
        }

        // Skapar en dynamisk css-klass med de st�rsta bildernas maxv�rden som h�jd & bredd.
        var style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = ".size {height:" + maxHeight + "px;width:" + maxWidth + "px; }";
        document.getElementsByTagName("head")[0].appendChild(style);

        // Loopar igenom objectArray och l�gger till bilderna i f�nstret.
        for (var i = 0; i < objectArray.length; i++) {

            var imgDiv = document.createElement("div");
            imgDiv.className = "size";

            var img = document.createElement("img")
            img.src = objectArray[i].thumbURL;

            imgDiv.appendChild(img)
            imageBox.appendChild(imgDiv);
        }
    }
};

window.onload = imageViewer.init;