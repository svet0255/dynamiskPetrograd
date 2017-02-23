   // hent json
$.getJSON("restourant.json", dataErHentet);

    // hent data for hver enkelt person
    function dataErHentet(data){
        data.retter.forEach(visRet);
    }

    function visRet(ret){
        // klon template
        var klon = document.querySelector("#ret_template").content.cloneNode(true);
    	//klon.ret_billede =


		klon.querySelector("img").src="imgs/small/"+ ret.billede +"-sm.jpg";
		klon.querySelector(".modalBillede img").src="imgs/medium/"+ ret.billede +"-md.jpg";



		// hvilke data skal med
        klon.querySelector(".data_navn").textContent = ret.navn;
        klon.querySelector(".data_pris").textContent = ret.pris;

		if(ret.vegetar == "1"){
			klon.querySelector(".data_vegetar").textContent = "Ja";
		}else{
			klon.querySelector(".data_vegetar").textContent = "Nej";
		}

		if(ret.udsolgt == "1"){
			klon.querySelector(".data_udsolgt").textContent = "Ja";
		}else{
			klon.querySelector(".data_udsolgt").textContent = "Nej";
		}

		klon.querySelector(".data_rabatPris").textContent = ret.rabatPris;
		klon.querySelector(".data_langBeskrivelse").textContent = ret.langBeskrivelse;

        // find modal-boks og sÃ¦t ind
        klon.querySelector(".modal").id = "myModal"+ret.id;
        klon.querySelector("button.modalknap").dataset.target = "#myModal"+ ret.id;
        // tilfÃ¸j html fra template tim DOM
        document.querySelector(".retter").appendChild(klon);
    }
