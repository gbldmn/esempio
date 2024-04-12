// let movimento = document.querySelector('.movimento');

// function cambioColore(){

//     movimento.classList.toggle("movimento");
//     movimento.classList.toggle("blue");

// }

// let array = [
//     'img/download (1).jpeg',
//     'img/download (2).jpeg',
//     'img/pexels-photo-209037.jpeg'
//   ];
  
//   let contenitore = document.querySelector('.container');
  
// let immagineAttuale = 0; // indice dell'immagine attualmente visualizzata

// function stampa() {
//     contenitore.innerHTML = `<div>
//         <img src="${array[immagineAttuale]}" alt="">  
//     </div>`;
// }

// function prima() {
//     immagineAttuale--; // Decrementa l'indice per visualizzare l'immagine precedente
//     if (immagineAttuale == 0) {
//         immagineAttuale = array.length - 1; // Torna alla fine dell'array se siamo alla prima immagine
//     }
//     stampa(); // Visualizza l'immagine precedente
// }

// function dopo() {
//     immagineAttuale++; // Incrementa l'indice per visualizzare l'immagine successiva
//     if (immagineAttuale == array.length -1) {
//         immagineAttuale = 0; // Torna all'inizio dell'array se siamo all'ultima immagine
//     }
//     stampa(); // Visualizza l'immagine successiva
// }

// // Visualizza la prima immagine all'avvio
// stampa();


let parola1 = 'SALUTO';
let parola2 = 'ciao';

function converti(x,z){
    x = x.toLowerCase()
    z = z.toUpperCase()

    return [x, z]
}

console.log(converti(parola1, parola2));