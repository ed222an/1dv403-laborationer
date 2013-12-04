"use strict";
var newDiv = document.getElementById("messageCounter");
newDiv.className = "messageCount";
var count = 0;

document.getElementById("messageCounter").innerHTML = "Number of messages: 0";

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

        //console.log(MessageBoard.messages[0].getDate());
        //console.log(MessageBoard.messages[1].getDate());
        //console.log(MessageBoard.messages[2].getDate());
        //console.log(MessageBoard.messages[3].getDate());

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
        var imgClose = document.createElement("img");
        var imgTime = document.createElement("img");

        // Skapar en radera meddelande-knapp.
        imgClose.src = "http://findicons.com/files/icons/573/must_have/48/remove.png";
        imgClose.className = "resizeImage";
        imgClose.alt = "Close";
        imgClose.onclick = function () {

            var doIt = confirm("Do you really want to delete this message?");
            if (doIt) {
                MessageBoard.removeMessage(messageID);
            }
        }

        // Skapar en tid-knapp
        imgTime.src = "http://img.informer.com/icons/png/48/52/52152.png";
        imgTime.className = "resizeImage";
        imgTime.alt = "Creation time";
        imgTime.onclick = function () {
            MessageBoard.showMessageTime(messageID);
        }

        // Lägger till de nya elementen i den nya divtaggen.
        text.appendChild(imgClose);
        text.appendChild(imgTime);
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
        ++count;
        document.getElementById("messageCounter").innerHTML = "Number of messages: " + count;
    },

    removeMessage: function (messageID) {

        // Raderar det valda meddelandet.
        MessageBoard.messages.splice(messageID, 1);

        // Ändrar meddelanderäknaren.
        --count;
        --count;
        MessageBoard.messageCounter();

        // Visar de kvarvarande meddelandena.
        MessageBoard.renderMessages();
    },

    showMessageTime: function (messageID) {

        var time = MessageBoard.messages[messageID].getDate();

        // Visar tiden då meddelandet skapades i en alertruta.
        alert("This message was created " + time);

    }
};

window.onload = MessageBoard.init;