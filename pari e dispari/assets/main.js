//L’utente sceglie pari o dispari 
var oddOrEven = prompt("Pari o dispari?");
//e inserisce un numero da 1 a 5.
var userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);
var pcNumber = RandomNumber(1,6);
console.log(pcNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//Sommiamo i due numeri 
somma= userNumber + pcNumber;
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddOrEvenSum(number_1 , number_2){
    if(number_1 + number_2 % 2==0){
        return true;
    }
    return false;
}
//Dichiariamo chi ha vinto.
if(oddOrEvenSum(userNumber , pcNumber)){
    console.log("la somma è pari");
} else{
    console.log("la somma è dispari");
}
