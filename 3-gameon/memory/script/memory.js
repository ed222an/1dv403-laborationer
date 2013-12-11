"use strict"

// Anv�nds f�r att kontrollera hur m�nga brickor som �r v�nda.
var flipLock = 0;

// Anv�nds som timer f�r att r�knar upp 1 sekund sen v�nder tillbaks brickorna.
var timeoutID;

// R�knare som h�ller reda p� hur m�nga par som hittats samt hur m�nga f�rs�k som gjorts.
var pairCount = 0;
var tryCount = 0;

// Statiskt memory-objekt.
var Memory = {

    memoryArray: [],

    init: function (e) {

        // Kallar p� random.js och skickar med storleken 4x4 p� spelplanen.
        Memory.memoryArray = RandomGenerator.getPictureArray(4, 4);

        // Kallar p� renderingsmetoden f�r spelet.
        Memory.renderArray(Memory.memoryArray);
    },

    renderArray: function (myArray) {

        // Skapar div-taggar och placerar dem i HTML-dokumentet.
        var newDiv = document.createElement("div");
        document.getElementById("memorygame").appendChild(newDiv);

        // Skapar en tabell och placerar den i HTML-dokumentet
        var table = document.createElement("table");
        table.border = 1;

        // Genererar rader och celler, byt siffra p� i < 4 f�r att enkelt �ndra storlek p� spelbr�det.
        for (var i = 0; i < 4; ++i) {
            var row = document.createElement("tr");
            table.appendChild(row);

            // Skapar en cell med respektive siffra.
            for (var j = 0; j < 4; ++j) {
                var cell = document.createElement("td");

                // �vers�tter arrayens siffror till bilder & l�gger in dem i a-taggar.
                var image = document.createElement("img");
                image.className = myArray[i * 4 + j];
                image.src = "../pics/0.png";
                image.alt = "?";
                var aTag = document.createElement("a");
                aTag.href = "#";

                // St�nger av onclick-eventet s� endast 2 brickor kan vara uppv�nda samtidigt.
                if (flipLock >= 2) {
                    aTag.onclick = null;
                    Memory.timer();
                };
                aTag.onclick = function (image, aTag) {
                    return function () {

                        // St�nger av onclick-eventet s� endast 2 brickor kan vara uppv�nda samtidigt.
                        if (flipLock >= 2) {
                            aTag.onclick = null;
                            Memory.timer();
                        }
                        else {
                            // Kallar p� metoden som v�nder bilderna.
                            Memory.flipTile(image, aTag);
                            ++flipLock;
                        };
                    };
                }(image, aTag);


                // L�gger till respektive bild i en tabellcell.
                aTag.appendChild(document.createTextNode(myArray[i * 4 + j]));
                aTag.appendChild(image);
                cell.appendChild(aTag);
                row.appendChild(cell);
            };
        };
        newDiv.appendChild(table);

    },

    timer: function () {

        console.log("Test");
        timeoutID = setTimeout(function () {
            var reset = document.getElementsByTagName("img");

            for (var i = 0; i < reset.length; i++) {
                reset[i].src = "../pics/0.png";
            };
            flipLock = 0;
        }
        , 1000);
    },

    flipTile: function (image, aTag) {

        // V�nder brickorna.
        if (image.className == 0) {
            image.src = "../pics/0.png";
        };
        if (image.className == 1) {
            image.src = "../pics/1.png";
        };
        if (image.className == 2) {
            image.src = "../pics/2.png";
        };
        if (image.className == 3) {
            image.src = "../pics/3.png";
        };
        if (image.className == 4) {
            image.src = "../pics/4.png";
        };
        if (image.className == 5) {
            image.src = "../pics/5.png";
        };
        if (image.className == 6) {
            image.src = "../pics/6.png";
        };
        if (image.className == 7) {
            image.src = "../pics/7.png";
        };
        if (image.className == 8) {
            image.src = "../pics/8.png";
        };

        console.log(image);

        //if (pairCount == 0) {
        //    alert("CONGRATULATIONS! YOU WON AFTER "+tryCount+" TRIES!");
        //};

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

//        // Calls the rendering method.
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