var affichage = 0;
var score = 0;
var compteur = 1;
var prix = 50;

function Clique() {
	score += compteur;
	var resultat = document.getElementById('affichage');
	resultat.innerHTML = score;
};

function Incrementer() {
	if (score < prix) {
		alert("Vous ne pouvez pas acheter de multiplicateur avec un score inférieur a " + prix + " !");
	}
	else {
		compteur += 1;
		score -= prix;
		prix = prix * 2;
		var resultat = document.getElementById('affichage');
		resultat.innerHTML = score;
		var nom = document.getElementById('multiplicateur');
		nom.innerHTML = "Multiplicateur x" + compteur + "<br>" + "Coût : " + prix;
	}
};

function AutoClick() {
	if (score < 200){
		alert("Vous ne pouvez pas acheter de multiplicateur avec un score inférieur a 200 !");
	}
	else{
		score -= 200;
		var auto = setInterval(Clique, 1000);
	}
};