// ESERCIZIO 1
  // //1 genero un numero random, per il nome
function rnd(min, max) {

    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    return Math.floor(Math.random() * maxRnd) + minRnd;
  }
function es1() {
  var nomi = ['giorgio','luca','paolo'];
  var cognomi = ['rossi','buoni','bianchi'];
  console.log(nomi)
    var nomiFalsi = [];

  //2 prendo il nome dall'arr

  console.log(nomCog);

  while (nomiFalsi.length < 5) {
    var rndNome = rnd(0, nomi.length - 1);
    var rndCog = rnd(0, cognomi.length - 1);
    console.log(rndNome, rndCog);
    var nome = nomi[rndNome];
    var cognome = cognomi[rndCog];
    //3  1,2 anche per cognomi
    //4 unisco nome e cognome push in array
    var nomCog = nome + ' ' + cognome;
    nomiFalsi.push(nomCog)
  }
  console.log(nomiFalsi);
}
function es2() {
  // var arr1 = [1, 2, 3];
  // var arr2 = [4, 5, 6, 7, 8];
  //
  // while (arr1.length < arr2.length) {
  //   var random = rnd(10, 20)
  //   arr1.push(random)
  // }
  // console.log(arr1, arr2);

}
function es3() {
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
}
function es4() {

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
}
function es5() {
  //- Creare un oggetto che descriva uno studente con le
  // seguenti proprietà: nome, cognome e età. Stampare a
  // schermo attraverso il for in tutte le proprietà.
  // - Creare un array di oggetti di studenti. Ciclare su tutti gli
  // studenti e stampare per ognuno nome e cognome
  // - Dare la possibilità all'utente attraverso 3 prompt di
  // aggiungere un nuovo oggetto studente inserendo
  // nell'ordine: nome, cognome e età.
  var studente1 = {

    'name': 'sacha',
    'lastname': 'collevecchio',
    'age': '24',
  }

  for (var key in studente1) {

    var value = studente1[key];
    console.log(value);
  }

}
function es6() {

  var studenti = [{
    'name': 'nome1',
    'lastname': 'cognome1',
    'age': 'eta1',
  },
  {
    'name': 'nome2',
    'lastname': 'cognome2',
    'age': 'eta2',
  },
  {
    'name': 'nome3',
    'lastname': 'cognome3',
    'age': 'eta3',
  }]

  for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    var name = studenti['name'];
    var lastname = studenti['lastname'];
    console.log(name,lastname);
  }
}
function es7() {

  var studenti = [{
    'name': 'nome1',
    'lastname': 'cognome1',
    'age': 'eta1',
  },
  {
    'name': 'nome1',
    'lastname': 'cognome1',
    'age': 'eta1',
  },
  {
    'name': 'nome1',
    'lastname': 'cognome1',
    'age': 'eta1',
  }]

  var addName = prompt('inserisci il nome');
  var addLastname = prompt('inserisci il Cognome');
  var addAge = prompt('inserisci il Età');
  var newStudent = {
    'name': addName,
    'lastname':addLastname,
    'age': addAge,
  };
  studenti.push(newStudent);
  console.log(studenti);
  //modo alternativo per modificare obj
  // var arr =[];
  // arr.push(studenti);
  // arr[0].name = 'nuovo nome'
}
function arrMix(arr1,arr2) {
  var mixed = [];
  for (var i = 0; i < arr1.length; i++) {
    elem1 = arr1[i];
    elem2 = arr2[i];
    mixed.push(elem1)
    mixed.push(elem2)
  }
  console.log(mixed);
}
function reverseString(string) {
 var reverse = '';
 for (var i = 0; i < string.length; i++) {
   var letter = string[i];
   reverse = letter + reverse;
 }
 console.log(reverse);
}
function esZucchine() {

  var zucchine = [{
      'peso': 10,
      'lunghezza': 10,
    },
    {
      'peso': 10,
      'lunghezza': 10,
    },
    {
      'peso': 20,
      'lunghezza': 20,
    },
    {
      'peso': 20,
      'lunghezza': 20,
    }
  ]
  var small = [];
  var big = [];
  var sumBig = 0;
  var sumSmall = 0;

  for (var i = 0; i < zucchine.length; i++) {
    var zucchina = zucchine[i];
    var lunghezza = zucchina['lunghezza'];
    var peso = zucchina['peso'];
    // console.log(peso,lunghezza);
    if (lunghezza > 15) {
      big.push(lunghezza);
      sumBig += lunghezza;
    } else {
      small.push(lunghezza);
      sumSmall += lunghezza
    }
  }
  console.log('peso zucchine grandi ' +  big + ' somma : ' + sumBig);
  console.log('peso zucchine piccole ' +  small + ' somma : ' + sumSmall);
}
function init() {
  // es1();
  // es2();
  // es3();
  // es4();
  // es5();
  // es6();
  // es7();
  // arrMix(['c', 'a'],['i', 'o']);
  // reverseString('string');
  esZucchine()
}
init();
