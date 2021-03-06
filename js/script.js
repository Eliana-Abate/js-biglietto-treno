/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


//! Variabili 

var userKm = parseInt(prompt('Indica i chilometri da percorrere'));
console.log(userKm);

var userAge = parseInt(prompt('Indica la tua età'));
console.log(userAge);

var costPerKm = 0.21;
console.log(costPerKm);

var price = (userKm * costPerKm);

var discount20 = ((price * 20) / 100);

var discount40 = ((price * 40) / 100);

var result = price;


//! Validation
if (isNaN(userKm) || isNaN(userAge)) {
    alert('Hai inserito valori non validi');

} else if (userKm < 1) {
    alert('Inserire un numero di chilometri pari o superiore a 1');
}




//! Condizioni
if (userAge < 18 && userAge >= 0) {

    result = (result - discount20); 

} else if (userAge > 65) {

    result = (result - discount40);
}


//! Display
var ticket = document.getElementById('ticket');
ticket.innerHTML = 'Il costo del tuo biglietto è di: ' + result.toFixed(2) + ' Euro';

