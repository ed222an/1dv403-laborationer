"use strict";

var MessageBoard = {

    messages: [],

    init: function (e) {

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

    // Skapar ett meddelande
    create: function createMessage() {

        var mess = new Message(document.getElementById("textBox").value, new Date());

        MessageBoard.messages.push(mess); // Lägger till det nya message-objeket i en array med meddelanden.

        document.getElementById("textBox").value = ""; // Tar bort den skrivna texten från textfältet.

    }

};
window.onload = MessageBoard.init;