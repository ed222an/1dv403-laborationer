"use strict";

window.onload = function(){

	
    var birthday = function (date) {

        // Din kod här.

        // Kontrollerar ifall rätt format på datumet används.
        var IsoDateRe = new RegExp("^([0-9]{4})-([0-9]{2})-([0-9]{2})");
        var matches = IsoDateRe.exec(date);
        if (!matches) {
            throw new Error("FEL! Ange ditt födelsedatum i formatet ÅÅÅÅ-MM-DD.");
        }

        //Skapar Date-objekt för jämförelse av födelsedar och dagens datum.

        var dateParts = date.split("-");

        var now = new Date()
        var currentYear = now.getFullYear()
        var dateEnd = new Date(currentYear, dateParts[1] - 1, dateParts[2]); // -1 på månaderna eftersom de har talbasen 0.

        // Har datumet redan passerats så läggs det på 1 på nuvarande året. Detta gör att det skrivs ut heltal istället för negativa tal.
        if (dateEnd - now < 0) {
            dateEnd.setFullYear(currentYear + 1);
        }

        return Math.ceil((dateEnd - now) / 1000 / 60 / 60 / 24);

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};