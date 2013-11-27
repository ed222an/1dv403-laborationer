"use strict";

window.onload = function init() {

    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText(), mess.getDate);
    mess.setText("En annan text");
    mess.setDate(Date());
    alert(mess);






};