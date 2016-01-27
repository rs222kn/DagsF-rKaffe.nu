var hour
var min
var n
var res
var p = document.getElementById("info");
var p2 = document.getElementById("info2");

function callRenderdate(){
     renderdate();
    setInterval(function(){
            renderdate();
    }, 6000);
}
function renderdate(){
	var date = new Date();
	console.log( date.getHours().length)
	
	var prehour = date.getHours();
	if(prehour.length == 1){
		hour = "0"+ prehour;
	}
	else{
		hour = prehour;
	}
	var premin =date.getMinutes();
	if(premin.length == 1){
		min ="0"+ premin;
	}
	else{
		min = premin;
	}
	var weekday = new Array(7);
	weekday[0]=  "söndag";
	weekday[1] = "måndag";
	weekday[2] = "tisdag";
	weekday[3] = "onsdag";
	weekday[4] = "torsdag";
	weekday[5] = "fredag";
	weekday[6] = "lördag";

	 n = weekday[date.getDay()];
	//var formatdetdate = "Idag är det "+n +" och nu klockan är "+ hour +":"+ min;
	
    p.textContent  ="";
	p.textContent  = "Idag är det "+n +" och nu är klockan är "+ hour +":"+ min;

	document.getElementById('date').appendChild(p);

	console.log(document.getElementsByTagName('p'))
	//document.getElementsByTagName('p').textContent  = "Idag är det "+n +" och nu klockan är "+ hour +":"+ min;
	renderResponse()

};

function renderResponse () {
	console.log(n == "söndag")
	if(n =="måndag"){
		if(hour < 05){
			res = "Nope! Det är måndag imorgon, du kan ju gott försöka lägga dig i tid";
			document.title = "Dags För Kaffe? Nej!";
		}
		else if(hour == 14 && min > 40){
			res= "Japp! Tänk dock på att stina stänger om mnidre än 20!"
			document.title = "Dags För Kaffe? Ja!";
		}
		else{
			res = "Självklart! Det är måndag, kör hårt!";
			document.title = "Dags För Kaffe? Ja!";
		}
	}
	if(n =="tisdag"){
		if(hour < 05){
			res = "Nope! Det är onsdag imorgon, du kan ju gott försöka lägga dig i tid";
			document.title = "Dags För Kaffe? Nej!";
		}
		else if(hour > 22 && min > 50){
			res = "Gå och lägg dig istället du kommer vara fett nöjd";
			document.title = "Dags För Kaffe? Nej!";
		}
		else if(hour == 14 && min > 40){
			res= "Japp! Tänk dock på att stina stänger om mnidre än 20!"
			document.title = "Dags För Kaffe? Ja!";
		}
		else{
			res = "Självklart! Det är du värd";
			document.title = "Dags För Kaffe? Ja!";
		}
	}
	if(n =="onsdag"){
		if(hour < 05){
			res = "Nope! Det är torsdag imorgon, du kan ju gott försöka lägga dig i tid";
			document.title = "Dags För Kaffe? Nej!";
		}
		else if(hour > 20 && min > 50){
			res = "IRSIH COFFEE TIME!";
			document.title = "Dags För Kaffe? Ja!";
		}
		else if(hour == 14 && min > 40){
			res= "Japp! Tänk dock på att stina stänger om mnidre än 20!"
			document.title = "Dags För Kaffe? Ja!";
		}
		else{
			res = "Onsdagar kräver att man bottnar ordentligt! Vi vet alla att man hanterar sprit bätre om man har druckigt kaffe innan";
			document.title = "Dags För Kaffe? Ja!";
		}
	}
	if(n =="torsdag"){
		if(hour < 05){
			res = "Nope! Det är fredag imorgon, du kan ju gott försöka lägga dig i tid";
			document.title = "Dags För Kaffe? Nej!";
		}
		else if(hour == 14 && min > 40){
			res= "Japp! Tänk dock på att stina stänger om mnidre än 20!"
			document.title = "Dags För Kaffe? Ja!";
		}
		else{
			res = "Du är säkert bakis... Drick ditt kaffe och håll käften";
			document.title = "Dags För Kaffe? Ja!";
		}
	}
	if(n =="fredag"){
		if(hour == 13 && min > 40){
			res= "Japp! Tänk dock på att stina stänger om mnidre än 20!"
			document.title = "Dags För Kaffe? Ja!";
		}
		else{
			res = "Det är fredag du borde dricka öl, men om du är sugen så självklart kör hårt!";
			document.title = "Dags För Kaffe? Ja!";
		}
	}
	if(n =="lordag"){
		
		
			res = "Ditt lilla bakfulla helvete, idag har Stina stängt... Kämpa, jag tror på dig <3";
			document.title = "Dags För Kaffe? Ja!";
		
	}
	if(n == "söndag"){
		if(hour > 22 && min > 50 || hour < 7){
			res = "Gå och lägg dig istället du kommer vara fett nöjd imorgon";
			document.title = "Dags För Kaffe? Nej!";
		}
		else{
			res = "Självklart! Det är du värd";
			document.title = "Dags För Kaffe? Ja!";
		}
	}

//	var p2 = document.createElement("p")
    console.log(res)
	p2.textContent  = res;
//
//	document.getElementById('respon').appendChild(p2);

	console.log(res)
}
 window.onload = callRenderdate()
