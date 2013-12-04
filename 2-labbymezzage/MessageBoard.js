"use strict";
var newDiv = document.getElementById("messageCounter");
newDiv.className = "messageCount";

var MessageBoard = {

    messages: [],

    init: function (e) {

        // Kopplar knapp-händelser på webbplatsen till javascript.
        var button = document.getElementById("button");

        button.addEventListener("click", MessageBoard.create, false);
        button.addEventListener("click", MessageBoard.messageCounter, false);
        button.addEventListener("click", MessageBoard.renderMessages, false);

        var textArea = document.getElementById("textBox");

        textArea.addEventListener("keydown", MessageBoard.searchKey, false);

        //Testar message-objektet.
        //var mess = new Message("Testmeddelande", new Date());
        //alert(mess);
        //alert(mess.getText);
        //mess.setText("En annan text");
        //alert(mess);


        //Testar message-arrayen.
        //var test1 = new Message("Test 1", new Date());
        //var test2 = new Message("Test 2", new Date());
        //var test3 = new Message("Test 3", new Date());
        //var test4 = new Message("Test 4", new Date());

        //MessageBoard.messages.push(test1, test2, test3, test4);

        //console.log(MessageBoard.messages[0].getText());
        //console.log(MessageBoard.messages[1].getText());
        //console.log(MessageBoard.messages[2].getText());
        //console.log(MessageBoard.messages[3].getText());

    },

    // Skapar ett meddelande.
    create: function () {

        var mess = new Message(document.getElementById("textBox").value, new Date());

        MessageBoard.messages.push(mess); // Lägger till det nya message-objeket i en array med meddelanden.

        document.getElementById("textBox").value = "";

    },

    renderMessages: function () {

        // Tar bort alla meddelanden.
        document.getElementById("previousMessages").innerHTML = ""; // Tar bort den skrivna texten från textfältet.

        // Visar alla meddelanden.
        for (var i = 0; i < MessageBoard.messages.length; ++i) {
            MessageBoard.renderMessage(i);
        }
    },

    renderMessage: function (messageID) {

        //Skapar en ny div-tag & lägger in meddelandetexten i en p-tag på div-taggen.
        var newDiv = document.getElementById("previousMessages");
        newDiv.className = "previousMessages";

        var text = document.createElement("p");
        var lineBreak = document.createElement("br");

        text.appendChild(document.createTextNode(MessageBoard.messages[messageID].getText()));
        text.appendChild(lineBreak);
        text.appendChild(document.createTextNode(MessageBoard.messages[messageID].getDateText()));

        newDiv.appendChild(text);
    },

    searchKey: function (e) {

        // Kollar ifall enter + shift är nedtryckt, isåfall byter man rad.
        if (event.keyCode == 13 && !event.shiftKey) {
            document.getElementById('button').click();
            e.preventDefault(); // Trycker man bara enter så skickas meddelandet men det blir ingen ny rad.
            return false;
        }

    },

    messageCounter: function () {

        // Räknar antal meddelanden.
        var count = MessageBoard.messages.length;
        document.getElementById("messageCounter").innerHTML = "Number of messages: " + count;
    }
};

window.onload = MessageBoard.init;