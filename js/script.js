// ESERCIZIO 1
// var nomi = ['giorgio','luca','paolo'];
// var cognomi = ['rossi','buoni','bianchi'];
// console.log(nomi)
//   var nomiFalsi = [];
// //1 genero un numero random, per il nome
function rnd(min, max) {

  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  return Math.floor(Math.random() * maxRnd) + minRnd;
}
// //2 prendo il nome dall'arr
//
// console.log(nomCog);
//
// while (nomiFalsi.length < 5) {
//   var rndNome = rnd(0, nomi.length - 1);
//   var rndCog = rnd(0, cognomi.length - 1);
//   console.log(rndNome, rndCog);
//   var nome = nomi[rndNome];
//   var cognome = cognomi[rndCog];
//   //3  1,2 anche per cognomi
//   //4 unisco nome e cognome push in array
//   var nomCog = nome + ' ' + cognome;
//   nomiFalsi.push(nomCog)
// }
// console.log(nomiFalsi);

// ESERCIZIO 2
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6, 7, 8];
//
// while (arr1.length < arr2.length) {
//   var random = rnd(10, 20)
//   arr1.push(random)
// }
// console.log(arr1, arr2);


// ESERCIZIO 3
// var sum = 0;
// var limit = parseInt(prompt('Indica il valore limite'));
// for (var i = 0; i < limit; i++) {
//   var valUtente = parseInt(prompt('Inserisci un valore'));
//   sum = sum + valUtente;
//   if (sum >= limit) {
//     break;
//   }
// }
// console.log(valUtente, limit, sum);

// ESERCIZIO 4
var div1 = document.getElementById('div1');
div1.style.color = "red";
var div2 = document.getElementById('div2');
div2.style.color = "blue";
var arr = [1,2,3,4];
var arrOdd = [];
var arrPair = [];
for (var i = 0; i < arr.length; i++) {
  numero = arr[i];
  // isOdd = numero % 2 == 1;
  // isPair = numero % 2 == 0;
  if (numero % 2 == 1) {
    arrOdd.push(numero);
    div1.innerHTML = arrOdd;
    div1.style.fontSize = '100px'
  } else {
    arrPair.push(numero);
    div2.innerHTML = arrPair;
    div2.style.fontSize = '100px'
  }

  console.log(arrOdd);
}
