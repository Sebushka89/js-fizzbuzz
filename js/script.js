console.log('Js ok');
/*
Scrivi un programma che stampi i numeri da 1 a 100, ma:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz.
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/
// Referenze
var listaNumeri = document.getElementById('data');

// Genero i numeri
for (n = 1; n <= 100; n++) {
  // Pongo le condizioni
  if ((n % 3 == 0) && (n % 5 == 0)) {
    listaNumeri.innerHTML += 'FizzBuzz' + '<br/>';
  }
  else if (n % 3 == 0) {
    listaNumeri.innerHTML +=  'Fizz' + '<br/>';
  }
  else if (n % 5 == 0) {
    listaNumeri.innerHTML +=  'Buzz' + '<br/>';
  }
  else {
    listaNumeri.innerHTML +=  n + '<br/>'
  }
}
