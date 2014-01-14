"use strict";

window.onload = function() {

    // Detta tal behöver bytas ut mot ett slumpat tal.
    var secret = Math.ceil(Math.random() * 100);
    var count = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
    var guess = function (number) {

        count++;

        if (isNaN(number)) {
            return [false, "Ange ett nummber mellan 1-100"];
        }
        else if (number > 100 || number < 1) {
            return [false, "Talet är utanför intervallet 0 - 100"];
        }
        else if (number > secret) {
            return [false, "Det hemliga talet är lägre!"];
        }
        else if (number < secret) {
            return [false, "Det hemliga talet är högre!"];
        }
        else if (number = secret) {
            return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
        }
	};
	
	// ------------------------------------------------------------------------------

	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}

		input.value = ""; // Lagt till så det skrivna talet försvinner vid varje klick.
	
	});
};