"use strict"

var memoryArray = [];

// Statiskt memory-objekt.
var Memory = {

    init: function (e) {

        // Kallar på slumpfilen och skickar med storleken 4x4 på spelplanen.
        Memory.saveArray(RandomGenerator.getPictureArray(4, 4));

        Memory.renderArray(memoryArray);
    },

    saveArray: function (randomGeneratedArray) {
        
        memoryArray = randomGeneratedArray;

    },

    renderArray: function (myArray) {

        // Skapar div-taggar och placerar dem i html-dokumentet.

        var newDiv = document.createElement("div");
        newDiv.id = "block";
        newDiv.className = "block";
        document.getElementsByTagName("body")[0].appendChild(newDiv);
        var innerDiv = document.createElement("div");
        innerDiv.className = "block-2";
        newDiv.appendChild(innerDiv);

        // Skapar en tabell och placerar den i HTML-dokumentet
        var table = document.createElement("table");
        table.border = 1;

        // Genererar rader och celler, byt siffra på i < 4 för att enkelt ändra storlek på spelbrädet.
        for (var i = 0; i < 4; ++i) {
            var row = document.createElement("tr");
            table.appendChild(row);

            // Skapar en cell med respektive siffra.
            for (var j = 0; j < 4; ++j) {
                var cell = document.createElement("td");

                // Översätter arrayens siffror till bilder & lägger in dem i a-taggar.
                var image = document.createElement("img");
                image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/0.png?raw=true";
                var aTag = document.createElement("a");
                aTag.onclick = function () {

                };

                // Lägger till respektive bild i en tabellcell.
                aTag.appendChild(document.createTextNode(myArray[i * 4 + j]));
                aTag.appendChild(image);
                cell.appendChild(aTag);
                row.appendChild(cell);
            };
        };
        innerDiv.appendChild(table);
    },

    flipTile: function (arrayValue) {

        // Vänder brickorna.
        if (arrayValue === 1) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/1.png?raw=true";
        };
        if (arrayValue === 2) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/2.png?raw=true";
        };
        if (arrayValue === 3) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/3.png?raw=true";
        };
        if (arrayValue === 4) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/4.png?raw=true";
        };
        if (arrayValue === 5) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/5.png?raw=true";
        };
        if (arrayValue === 6) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/6.png?raw=true";
        };
        if (arrayValue === 7) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/7.png?raw=true";
        };
        if (arrayValue === 8) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/8.png?raw=true";
        };
    }

};
window.onload = Memory.init;

//console.log("Test");

//for (var i = 0; i < memoryArray.length; ++i) {
//    console.log(memoryArray[i]);
//}

//if (myArray[i * 4 + j] === 1) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/1.png?raw=true";
//};
//if (myArray[i * 4 + j] === 2) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/2.png?raw=true";
//};
//if (myArray[i * 4 + j] === 3) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/3.png?raw=true";
//};
//if (myArray[i * 4 + j] === 4) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/4.png?raw=true";
//};
//if (myArray[i * 4 + j] === 5) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/5.png?raw=true";
//};
//if (myArray[i * 4 + j] === 6) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/6.png?raw=true";
//};
//if (myArray[i * 4 + j] === 7) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/7.png?raw=true";
//};
//if (myArray[i * 4 + j] === 8) {
//    image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/8.png?raw=true";
//};