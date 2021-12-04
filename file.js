// CODICE DI CODIFICA DEGLI STATI D'ANIMO

/*
	1 _ le icone selezionate hanno un bordo nero
	2 _ non è possibile selezionare più di 1 icona
*/

function icons(){

	console.log("start")

	// costante _ spazio output
	const output = document.getElementById('output')
	// costante _ messaggio di avviso
	const message = document.getElementById("message");

	const buttons = document.querySelectorAll('.btn')

				// PAIN
	let count = 0;
	let lista_sentimenti = [];

		// bottoni selezionati cambiano stile
	buttons.forEach(function(currentBtn){
		currentBtn.addEventListener('click', function(){
			message.textContent = "";

			// bordo nero
			this.style.border = "1px solid white";
			//	font
			this.style.fontFamily = "Frutiger";

		// per trovare l'icona corrispondente al bottone selezionato
			let sentimento = this.id; // variante "sentimento" è questo id
			let img = document.createElement("img"); //img viene creata nel documeto
			img.src = "img/" + sentimento + ".png"; // fonte delle img = cartella img + parola corrispondente all'id selezionato + formato png



		// se il bottone è già selezionato -> condizione 1: compare il messaggio d'avviso

			if (lista_sentimenti.indexOf(sentimento) >= 0){  //  -1 quando non è esistente
				console.log(sentimento + " è già esistente") // compare il messaggio				
				console.log(lista_sentimenti.indexOf(sentimento))
				// F12 _ CONSOLE -> 
				message.textContent = sentimento + " è già esistente";
			}


		//se il bottone non è selezionato -> condizione 2: il sentimento viene 

			else {
				lista_sentimenti.push(sentimento) // aggiunge sentimento
				output.appendChild(img) // inserire sentimento nell'ultimo nodo
				count += 1; // incrementare il contatore
				// F12 _ CONSOLE -> 
				console.log(sentimento + " è incluso nella lista")
			}
			console.log(lista_sentimenti)


		// se il count (n° bottoni selezionati) è > 3, il count si riazzera e riparte da capo (ciclo / loop)
			if (count > 3) {
				output.innerHTML = ""
				count = 0
				lista_sentimenti = [];

				// stile dei bottoni selezionati si annulla
				buttons.forEach(function(currentBtn){
					currentBtn.style.border = "none";

					currentBtn.style.fontFamily = "Helvetica";
				})
			}
		})
	})
}

window.addEventListener("load", function(){
	icons();
})