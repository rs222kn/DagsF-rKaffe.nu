'use strict';

var kaffe = kaffe || {};

var info = document.getElementById('info');
var info2 = document.getElementById('info2');

kaffe.weekdays = [
    'söndag',
    'måndag',
    'tisdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lördag'
];

kaffe.callRenderdate = function(){
    kaffe.renderdate();
   setInterval(function(){
        kaffe.renderdate();
   }, 60000);
};

kaffe.renderdate = function(){
    var date = new Date();
    var min =date.getMinutes();
	var hour = date.getHours();
    let weekday = kaffe.weekdays[date.getDay()];

	if(hour.length === 1){
		hour = '0'+ hour;
	} else{
		hour = hour;
	}
	if(min.length === 1){
		min ='0'+ min;
	} else{
		min = min;
	}

   info.textContent  ='';
   info.textContent  = 'Idag är det '+weekday +' och nu är klockan är '+ hour +':'+ min;
   document.getElementById('date').appendChild(info);

   kaffe.renderResponse(weekday, hour, min);
};

kaffe.renderResponse = function(weekday, hour, min){
    var res = '';
    switch (true) {
        case weekday === kaffe.weekdays[1]:
            if(hour < 5){
                res = 'Nope! Det är måndag imorgon, du kan ju gott försöka lägga dig i tid';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else if(hour === 14 && min > 40){
                res= 'Japp! Tänk dock på att stina stänger om mnidre än 20!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else{
                res = 'Självklart! Det är måndag, kör hårt!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        case weekday === kaffe.weekdays[2]:
            if(hour < 5){
                res = 'Nope! Det är onsdag imorgon, du kan ju gott försöka lägga dig i tid';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else if(hour > 22 && min > 50){
                res = 'Gå och lägg dig istället du kommer vara fett nöjd';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else if(hour === 14 && min > 40){
                res = 'Japp! Tänk dock på att stina stänger om mnidre än 20!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else{
                res = 'Självklart! Det är du värd';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        case weekday === kaffe.weekdays[3]:
            if(hour < 5){
                res = 'Nope! Det är torsdag imorgon, du kan ju gott försöka lägga dig i tid';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else if(hour > 20 && min > 50){
                res = 'IRSIH COFFEE TIME!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else if(hour === 14 && min > 40){
                res = 'Japp! Tänk dock på att stina stänger om mnidre än 20!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else{
                res = 'Onsdagar kräver att man bottnar ordentligt! Vi vet alla att man hanterar sprit bätre om man har druckigt kaffe innan';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        case weekday === kaffe.weekdays[4]:
            if(hour < 5){
                res = 'Nope! Det är fredag imorgon, du kan ju gott försöka lägga dig i tid';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else if(hour === 14 && min > 40){
                res = 'Japp! Tänk dock på att stina stänger om mnidre än 20!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else{
                res = 'Du är säkert bakis... Drick ditt kaffe och håll käften';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        case weekday === kaffe.weekdays[5]:
            if(hour === 13 && min > 40){
                res = 'Japp! Tänk dock på att stina stänger om mnidre än 20!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            else{
                res = 'Det är fredag du borde dricka öl, men om du är sugen så självklart kör hårt!';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        case weekday === kaffe.weekdays[6]:
            res = 'Ditt lilla bakfulla helvete, idag har Stina stängt... Kämpa, jag tror på dig <3';
            document.title = 'Dags För Kaffe? Ja!';
            break;
        case weekday === kaffe.weekdays[0]:
            if(hour > 22 && min > 50 || hour < 7){
                res = 'Gå och lägg dig istället du kommer vara fett nöjd imorgon';
                document.title = 'Dags För Kaffe? Nej!';
            }
            else{
                res = 'Självklart! Det är du värd';
                document.title = 'Dags För Kaffe? Ja!';
            }
            break;
        default:

    }

    info2.textContent  = res;
};

 window.onload = kaffe.callRenderdate();
