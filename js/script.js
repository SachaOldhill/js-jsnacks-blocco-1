var nomi = ['giorgio','luca','paolo'];
var cognomi = ['rossi','buoni','bianchi'];
console.log(nomi)
  var nomiFalsi = [];
//1 genero un numero random, per il nome
function rnd(min,max) {

 var minRnd = min;
 var maxRnd = max - minRnd + 1;
 return Math.floor(Math.random()*maxRnd) + minRnd;
}

//2 prendo il nome dall'arr

// console.log(nomCog);

while (nomiFalsi.length < 5) {
  var rndNome = rnd(0,nomi.length-1);
  var rndCog = rnd(0,cognomi.length-1);
  console.log(rndNome,rndCog);
  var nome = nomi[rndNome];
  var cognome = cognomi[rndCog];
  //3  1,2 anche per cognomi
  //4 unisco nome e cognome push in array
  var nomCog = nome + ' ' + cognome;
  nomiFalsi.push(nomCog)
}
console.log(nomiFalsi);
