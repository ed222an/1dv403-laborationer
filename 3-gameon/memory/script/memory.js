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

        // Skapar en inre div-tag
        var innerDiv = document.createElement("div");
        innerDiv.className = "block-2";

        // Lägger till den inre divtaggen i den yttre.
        newDiv.appendChild(innerDiv);

        // Skapar en tabell och placerar den i HTML-dokumentet
        var table = document.createElement("table");
        table.border = 1;

        // Genererar rader och celler, byt siffra på i < 4 för att enkelt ändra storlek på spelbrädet.
        for (var i = 0; i < 4; ++i) {
            var row = document.createElement("tr");
            table.appendChild(row);

            // Lägger till respektive siffra i arrayen i en tabellcell.
            for (var j = 0; j < myArray.length; ++j) {
                var arrayNumber = document.createTextNode(myArray[j]);

                // Skapar en cell med respektive siffra.
                for (var k = 0; k < 4; ++k) {
                    var cell = document.createElement("td");
                    row.appendChild(cell);
                    cell.appendChild(arrayNumber);
                };
            };
        };

        innerDiv.appendChild(table);




    }

};
window.onload = Memory.init;

//console.log("Test");

//for (var i = 0; i < memoryArray.length; ++i) {
//    console.log(memoryArray[i]);
//}
