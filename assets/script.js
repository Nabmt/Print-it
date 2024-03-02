const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Etape 1bis Déclaration des variables
// On sélectionne les éléments du document HTML avec document.querySelector et document.querySelectorAll 

const banner = document.querySelector('#banner');
const bannerImages = banner.querySelectorAll('.banner-img');
const arrowLeft = banner.querySelector('.arrow_left');
const arrowRight = banner.querySelector('.arrow_right');
const tagline = banner.querySelector('.tagline'); //Slogan
const dots = banner.querySelectorAll('.dot');
let currentSlide = 0; // Variable currentSlide -> une valeur initiale de 0.



// Etape 2 Création des events listeners des flèches + Test

arrowRight.addEventListener('click', function (event) {
	alert("Tu as cliquer sur la flèche de droite");

	showNextImage();
	

});
arrowLeft.addEventListener('click', function (event) {
	alert("Tu as cliquer sur la flèche de gauche");

	showPreviousImage();
	
});

//Etape 5 Fonction des slides Avant et Arrière

function showPreviousImage() {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1; // Si l'index devient négatif, revenir à la dernière diapositive

	}
	updateBulletPoint(); // Maj des points 

	affichageImageText(); // Bonne img et bon p correxpondant 

}

function showNextImage() {

	currentSlide++

	if (currentSlide === slides.length) {
		currentSlide = 0; // Si l'index = à la longueur, revenir à la première image
	}
	updateBulletPoint();

	affichageImageText()

}

// Etape 4 On recupere l'image et le texte conrespondant


function affichageImageText() {
	const image = document.querySelector(".banner-img"); //élément img
	const text = document.querySelector("#banner p"); //élément paragraphe

	const currentSlideData = slides[currentSlide]; //On récupere la diapositive correspondant à l'index

     //afficher la bonne src image à la slide correspondante
	console.log(image.src = "assets/images/slideshow/" + currentSlideData.image);
	text.innerHTML = currentSlideData.tagLine; //afficher le texte correspondant à la bonne slide 

}

// Etape 3 Fonction pour mettre à jour les points 

function updateBulletPoint() {
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("dot_selected"); // On ajoute la classe dot_selected à l'élément dot correspondant à l'index
	

		} else {
			dot.classList.remove("dot_selected"); // Supprimer la classe dot_selected pour tous les éléments
		
		}
	});
}