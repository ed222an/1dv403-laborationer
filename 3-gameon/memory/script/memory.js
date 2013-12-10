"use strict"

var newDiv = null;
var innerDiv = null;
var table = null;
var row = null;
var cell = null;
var aTag = null;
var image = null;

// Används för att sätta id:n på tabellcellernas a-taggar.
var boxCounter = 0;

// Statiskt memory-objekt.
var Memory = {

    memoryArray: [],

    init: function (e) {

        // Kallar på random.js och skickar med storleken 4x4 på spelplanen.
        Memory.memoryArray = RandomGenerator.getPictureArray(4, 4);

        // Kallar på renderingsmetoden för spelet.
        Memory.renderArray(Memory.memoryArray);
    },

    makeClickListener: function (elm) {
        return function () {
            Memory.flipTile(elm.className);
        };
    },

    renderArray: function (myArray) {

        // Skapar div-taggar och placerar dem i HTML-dokumentet.
        newDiv = document.createElement("div");
        document.getElementById("memorygame").appendChild(newDiv);

        // Skapar en tabell och placerar den i HTML-dokumentet
        table = document.createElement("table");
        table.border = 1;

        // Genererar rader och celler, byt siffra på i < 4 för att enkelt ändra storlek på spelbrädet.
        for (var i = 0; i < 4; ++i) {
            row = document.createElement("tr");
            table.appendChild(row);

            // Skapar en cell med respektive siffra.
            for (var j = 0; j < 4; ++j) {
                cell = document.createElement("td");

                // Översätter arrayens siffror till bilder & lägger in dem i a-taggar.
                image = document.createElement("img");
                image.className = myArray[i * 4 + j];
                image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/0.png?raw=true";
                aTag = document.createElement("a");
                aTag.onclick = Memory.makeClickListener(image);


                // Lägger till respektive bild i en tabellcell.
                aTag.appendChild(document.createTextNode(myArray[i * 4 + j]));
                aTag.appendChild(image);
                cell.appendChild(aTag);
                row.appendChild(cell);
            };
        };
        newDiv.appendChild(table);

    },

    flipTile: function (imageClass) {
        console.log(imageClass);
        
        // Vänder brickorna.
        if (imageClass == 1) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/1.png?raw=true";
        };
        if (imageClass == 2) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/2.png?raw=true";
        };
        if (imageClass == 3) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/3.png?raw=true";
        };
        if (imageClass == 4) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/4.png?raw=true";
        };
        if (imageClass == 5) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/5.png?raw=true";
        };
        if (imageClass == 6) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/6.png?raw=true";
        };
        if (imageClass == 7) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/7.png?raw=true";
        };
        if (imageClass == 8) {
            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/8.png?raw=true";
        };

    }

};
window.onload = Memory.init;

//console.log("Test");

//for (var i = 0; i < memoryArray.length; ++i) {
//    console.log(memoryArray[i]);
//}

//"use strict"

//var newDiv = null;
//var innerDiv = null;
//var table = null;
//var row = null;
//var cell = null;
//var aTag = null;
//var image = null;

//// Use this to put class names on the images.
//var boxCounter = 0;

//// Static memory-object.
//var Memory = {

//    memoryArray: [],

//    init: function (e) {

//        // Calls a separate js-file which generates a random numbers.
//        Memory.memoryArray = RandomGenerator.getPictureArray(4, 4);

//        // Calls the rendering method
//        Memory.renderArray(Memory.memoryArray);
//    },

//    renderArray: function (myArray) {

//        // Creates and places div-tags in the HTML-document.
//        newDiv = document.createElement("div");
//        document.getElementsByTagName("body")[0].appendChild(newDiv);
//        innerDiv = document.createElement("div");
//        newDiv.appendChild(innerDiv);

//        // Creates a table and places it in the HTML-document.
//        table = document.createElement("table");
//        table.border = 1;

//        // Generates rows and cells, swap the 4's to change the size of the gameboard.
//        for (var i = 0; i < 4; ++i) {
//            row = document.createElement("tr");
//            table.appendChild(row);

//            // Creates a cell, each with its own respective random number.
//            for (var j = 0; j < 4; ++j) {
//                cell = document.createElement("td");

//                // Adds a "Question-mark"-picture to the cell and places them in a-tags.
//                image = document.createElement("img");
//                image.className = myArray[i * 4 + j];
//                image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/0.png?raw=true";
//                aTag = document.createElement("a");
//                aTag.onclick = function () {

//                    Memory.flipTile(image.className);
//                };

//                // Places the pictures in the document, along with its random number for easier testing purposes.
//                aTag.appendChild(document.createTextNode(myArray[i * 4 + j]));
//                aTag.appendChild(image);
//                cell.appendChild(aTag);
//                row.appendChild(cell);
//            };
//        };
//        innerDiv.appendChild(table);

//    },

//    flipTile: function (imageClass) {
//        console.log(imageClass);

//        // This should flip the tiles if the number matches the class name.
//        if (imageClass == 1) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/1.png?raw=true";
//        };
//        if (imageClass == 2) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/2.png?raw=true";
//        };
//        if (imageClass == 3) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/3.png?raw=true";
//        };
//        if (imageClass == 4) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/4.png?raw=true";
//        };
//        if (imageClass == 5) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/5.png?raw=true";
//        };
//        if (imageClass == 6) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/6.png?raw=true";
//        };
//        if (imageClass == 7) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/7.png?raw=true";
//        };
//        if (imageClass == 8) {
//            image.src = "https://github.com/1dv403/1dv403-laborationer/blob/master/3-gameon/memory/pics/8.png?raw=true";
//        };

//    }

//};
//window.onload = Memory.init;