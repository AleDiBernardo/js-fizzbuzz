# Consegna

    Scrivi un programma che stampi in console i numeri da 1 a 100,
    ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

## Domande

- Come faccio a sapere se un numero è divisibile senza resto per un altro?
- Abbiamo visto qualcosa di particolare che possiamo usare?

## Bonus

- [x] Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

- [x] Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

# Soluzione 

## JavaScript
- [x] Implementazione ciclo for che itera da 1 a 100
    - Se i % 3 è uguale a 0
        stampa Fizz
    - Altrimenti se ( i % 3 è uguale a 0 AND i % 5 è uguale a 0)
        stampa FizzBuzz
    - Altrimenti se (i % 5 è uguale a 0)
        stampa Buzz
    - Altrimenti
        stampa il numero

## HTML e CSS
- [x] creare un container dove poter aggiugere gli elementi con il numero o la stringa corretta

- [x] aggiungere del css