"use strict";

function Message(message, date) {
    
    this.getText = function () {
        return message;
    }

    this.setText = function (_text) {
        message = _text;
    }

    this.getDate = function () {
        return date;
    }

    this.setDate = function (_date) {
        date = _date;
    }
}

Message.prototype.toString = function () {
    return this.getText() + " (" + this.getDate() + ")";
}

Message.prototype.getHTMLText = function () {
    return this.message.replace(/[\n\r]/g, "<br />");
}

Message.prototype.getDateText = function () {

    var totalSec = new Date().getTime() / 1000;
    var hours = parseInt(totalSec / 3600) % 24;
    hours += 1;
    var minutes = parseInt(totalSec / 60) % 60;
    var seconds = parseInt(totalSec % 60, 10);
    
    return (hours < 10 ? "0" + hours : hours) + "-" + (minutes < 10 ? "0" + minutes : minutes) + "-" + (seconds < 10 ? "0" + seconds : seconds);
}