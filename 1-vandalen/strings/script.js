"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function (str) {

        // Plats för förändring.
        // Vid fel, kasta ett undantag med ett meddelande till användaren.
        if (str == "") {
            throw new Error("FEL! Mata in en textsträng!");
        }
        else {
            // For-loop som itererar igenom strängen, kollar efter de bestämda tecknen och inverterar versaler och gemener.
            var s = '';
            for (var i = 0; i < str.length; i++) {
                var n = str.charAt(i);

                // Är n = a eller A görs de om till #, annars omvandlas den från versal till gemen och vice versa.
                s += (n == 'a' || n == 'A' ? '#' : n == n.toLocaleUpperCase() ? n.toLocaleLowerCase() : n.toLocaleUpperCase());
            }

            // Returnera den konverterade strängen.
            return s;
        }
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};