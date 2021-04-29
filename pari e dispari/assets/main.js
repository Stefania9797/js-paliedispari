//L’utente sceglie pari o dispari 
var oddOrEven = prompt("pari o dispari?");
//e inserisce un numero da 1 a 5.
var userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);
alert("il tuo numero è "+userNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
var pcNumber = RandomNumber(1,6);
alert("il numero del computer è "+pcNumber);
console.log(pcNumber);
//Sommiamo i due numeri 
somma= userNumber + pcNumber;
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(number_1 , number_2){
    if((number_1 + number_2) % 2==0){
        console.log("la somma è pari");
        alert("la somma dei numeri è pari");
        return true;
        
    }
    console.log("la somma è dispari");
    alert("la somma dei numeri è dispari");
    return false;
}
//Dichiariamo chi ha vinto.
if(oddOrEven =="pari" && isEven(userNumber , pcNumber)){
    console.log("vince l'utente");
    alert("Hai vinto!");
}else if(oddOrEven =="dispari" && !isEven(userNumber , pcNumber)){
    console.log("vince l'utente");
    alert("Hai vinto!");
}
else{
    console.log("vince il pc");
    alert("Hai perso!");
}
