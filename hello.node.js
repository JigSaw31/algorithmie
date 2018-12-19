/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc. 2018
 * @version 1.0.0
 */

 /**
  * 
  * @param {*} currentMax Valeur maximale courante
  * @param {*} value Valeur lue dans le tableau
  * @return number La valeur la plkus élevée entre currentMax et value
  */
 function max(currentMax, value) {
     if (value > currentMax) {
         return value;
     } else {
         return currentMax;
     }
 }

 function min(currentMin, value) {
    if (value < currentMin) {
        return value;
    } else {
        return currentMin;
    }
 }

 function minOrMax(current, value, wantMax = true) {
     if (wantMax){
         return max(current, value);
     }
     return min(current, value);
 }

/**
 * @var array
 * Tableau de nombres entiers
 */
const tableau = [25, 50, 256, 312, 3, 22, 8];


let somme = 0;
let maxi = tableau[0];
let minIs = tableau[0];




// Boucle de parcours du tableau

    for (let i = 0; i < tableau.length; i++) {

            maxi = minOrMax(maxi, tableau[i]);
            minIs = minOrMax(minIs, tableau[i], false);
            somme = somme + tableau[i];

    }

    let indice;
    let nvTableau=[];
    minIs = tableau[0];
    while (tableau.length > 0){
        for (let i = 0; i < tableau.length; i++){
            if(tableau[i] < minIs){
                minIs = tableau[i];
                indice = i;
            }
        }

        nvTableau.push(minIs);
        tableau.splice(indice, 1);
        minIs = 100000000000000000000000000000;
        
    }

    //Trier un tableau alphanumérique dans l'ordre
    const triTableau = [432, 14, 99, 125];
    triTableau.sort(function(a, b){return a - b});
    console.log(triTableau);

console.log(nvTableau);
console.log('La somme du tableau est égal à : ' + somme);
console.log('La valeur maximale du tableau est : ' + maxi);
console.log('La valeur minimale du tableau est : ' + minIs);

