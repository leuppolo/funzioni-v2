// JavaScript Document

function generatore() {
	
	//Variabile descrizione di YouTube
	var desc = document.getElementById("descrizione").value;
	
	
	// Ottenimento id 
	var link1 = document.getElementById("linkTubes").value;
	
	var lunghezza = link1.length;
	
	var firstCharLink = link1.charAt(0); 
	
	if ( firstCharLink == 'h' ) {
		var id = link1.substring(32, 43);
		//document.getElementById("output").innerHTML = id;
	} else {
		var id = link1.substring(24, 35);
		//document.getElementById("output").innerHTML = id;
	}
	
	// Creazione link immagine preview video
	var img = "<img src=\"https://i.ytimg.com/vi/" + id + "/mqdefault.jpg\" />";
	//document.getElementById("output").innerHTML = "<textarea class=\"final\" id=\"output\">" + img + "</textarea>"; 
	
	
	// Accorciamo la descrizione
	
	var num = 120;
	var char = desc.charAt(num);
	if (desc.length > 120) { 
		if (desc.charAt(num) == ' ') {
			desc.substring(0, num);
		} else {
			while ( char != ' ') {
				num++;
				char = desc.charAt(num);
			}
			desc = desc.substring(0, num);
		}
		// Aggiungo i "..." solo se le descrizione supera i 120 caratteri
		desc = " " + desc + "...";
	}
	
	// Output finale 
	
	var flag = img + desc;
	
	document.getElementById("output").innerHTML = "<textarea class=\"final\" id=\"output\">" + flag + "</textarea>"; 
}


