"use strict"

// Räknare som håller reda på hur många par som hittats samt hur många försök som gjorts.
var pairCount = 0;
var tryCount = 0;
var clickCount = 0;

// Statiskt memory-objekt.
var Memory = {

    memoryArray: [],
    imageArray: [],
    rows: 4,
    cols: 4,

    init: function (e) {

        // Kallar på random.js och skickar med storleken 4x4 på spelplanen.
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);

        // Kallar på renderingsmetoden för spelet.
        Memory.renderArray(Memory.memoryArray);
    },

    renderArray: function (myArray) {

        // Skapar div-taggar och placerar dem i HTML-dokumentet.
        var newDiv = document.createElement("div");
        document.getElementById("memorygame").appendChild(newDiv);

        // Skapar en tabell och placerar den i HTML-dokumentet
        var table = document.createElement("table");
        table.border = 1;

        // Genererar rader och celler, byt siffra på i < 4 för att enkelt ändra storlek på spelbrädet.
        for (var i = 0; i < Memory.rows; ++i) {
            var row = document.createElement("tr");
            table.appendChild(row);

            // Skapar en cell med respektive siffra.
            for (var j = 0; j < Memory.cols; ++j) {
                var cell = document.createElement("td");

                // Översätter arrayens siffror till bilder & lägger in dem i a-taggar.
                var image = document.createElement("img");
                image.className = myArray[i * 4 + j]; // Behöver ändras ifall man ska kunna ha andra värden än fyra på rows och cols.
                image.src = "../pics/0.png";
                image.alt = "?";
                var aTag = document.createElement("a");
                aTag.href = "#";

                // Lägger till respektive bild i en tabellcell.
                aTag.appendChild(document.createTextNode(myArray[i * 4 + j]));
                aTag.appendChild(image);
                cell.appendChild(aTag);
                row.appendChild(cell);

                // Skickar med bilden till flipfunktionen.
                Memory.flipTile(image, aTag);
            };
        };
        newDiv.appendChild(table);

    },

    flipTile: function (image, aTag) {

        aTag.onclick = function (image, aTag) {
            return function () {

                ++clickCount;

                // Vänder bilden.
                if (clickCount < 3) {

                    if (Memory.imageArray.length <= 2) {
                        image.src = "../pics/" + image.className + ".png";
                    };
                }
                

                // Lägger till aktuell bild till en array.
                Memory.imageArray.push(image);

                if (Memory.imageArray.length === 2) {
                    ++tryCount;

                    // Jämför de två bilderna i arrayen med varandra.
                    if (Memory.imageArray[0].src == Memory.imageArray[1].src) {

                        // Är de lika läggs 1 till på parräknaren & arrayen nollas. Är parräknaren = 8 skrivs en wintext ut.
                        ++pairCount;
                        clickCount = 0;
                        Memory.imageArray = [];
                        if (pairCount == 8) {
                            var winText = document.getElementById("winner");
                            winText.innerHTML = "CONGRATULATIONS! YOU WON AFTER " + tryCount + " TRIES! (reload page to play again)"
                        };
                    }
                    else {
                        // Är bilderna inte lika startas en timer och bilderna vänds ner igen.
                        setTimeout(function () {

                            for (var i = 0; i < Memory.imageArray.length; ++i) {
                                Memory.imageArray[i].src = "../pics/0.png";
                            };
                            Memory.imageArray = [];
                            clickCount = 0;
                        }, 1000);
                    };
                };
            };
        }(image, aTag);

    }
};
window.onload = Memory.init;