//L’utente sceglie pari o dispari 
var oddOrEven = prompt("Pari o Dispari?");
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
function isEven(number_1 , number_2){
    if((number_1 + number_2) % 2==0){
        console.log("la somma è pari");
        return true;
        
    }
    console.log("la somma è dispari");
    return false;
}
//Dichiariamo chi ha vinto.
if(oddOrEven =="Pari" && isEven(userNumber , pcNumber)){
    console.log("vince l'utente");
}else if(oddOrEven =="Dispari" && !isEven(userNumber , pcNumber)){
    console.log("vince l'utente");
}
else{
    console.log("vince il pc");
}
