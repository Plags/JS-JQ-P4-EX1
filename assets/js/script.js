$(function(){
  var scoreOrdi = 0;
  var scoreUtili = 0;
  var choixUtili;
  var motRandom;
//Fonction pour choix utilisateur ( recupere les valeurs du <select>)
$('#deroll').click(function(){
  choixUtili = $(this).val()
   console.log(choixUtili)

//Fonction pour le random de la machine , pioche pierre / feuille / ciseau au hasard
$('#shifumiButton').click(function(){
  scoreUtili++;//Rajoute +1 au scoreUtili a chaque clique
  var tab = ['ciseau', 'pierre', 'feuille']
  var numRandom = Math.floor(Math.random()*tab.length)
  var motRandom = tab[numRandom]
  console.log(motRandom);
$('#shifumiButton').click(function compareResult(){
 if(choixUtili == feuille && motRandom == 'feuille'){
   alert("Vous avez fait egalité !  la machine a choisi"+ motRandom)
}
else if(choixUtili == pierre && motRandom == 'pierre'){
   alert("Vous avez fait egalité !  la machine a choisi"+ motRandom)
}
else if(choixUtili == ciseau && motRandom == 'ciseau'){
   alert("Vous avez fait egalité ! la machine a choisi"+ motRandom)
}
else if(choixUtili == pierre || motRandom == 'feuille'){
  alert("Vous avez perdu ! la machine a choisi"+ motRandom)
}
else if(choixUtili == ciseau || motRandom == 'pierre'){
  alert("Vous avez perdu ! la machine a choisi"+ motRandom)
}
else if(choixUtili == feuille || motRandom == 'ciseau'){
  alert("Vous avez perdu ! la machine a choisi : " + motRandom)
}
else if(choixUtili == feuille || motRandom == 'pierre'){
  alert("Vous avez gagner ! la machine a choisi : "+ motRandom)
}
else if(choixUtili == pierre || motRandom == 'ciseau'){
  alert("Vous avez gagner ! la machine a choisi : "+motRandom)
}
else(choixUtili == ciseau || motRandom == 'feuille')
  alert("Vous avez gagner ! la machine a choisi : "+motRandom)
});
});
});
});
