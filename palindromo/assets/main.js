//Chiedo all’utente di inserire una parola 
var userWord = prompt("Inserisci una parola");
//Creare una funzione per capire se la parola inserita è palindroma
function isPalindrom(randomWord) {
    return randomWord == randomWord.split('').reverse().join('');
}
if(isPalindrom(userWord)){
    alert("la parola è palindroma!")
}else{
    alert("la parola non è palindroma")
}
