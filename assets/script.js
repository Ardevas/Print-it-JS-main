const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const dotsList = document.querySelector(".dots");
const buttonDot = document.querySelectorAll(".dot");

// Définition du point de départ
let currentSlideIndex = 0;

// Image affichée
function showSlide(index) {
    const slide = slides[index];
    bannerImage.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;
}

// Dot actif du bulletpoints
function dotSelection(index) {
    buttonDot.forEach(buttonDot => {
        buttonDot.classList.remove("dot_selected");
    });
    buttonDot[index].classList.add("dot_selected");
}

// fonctionnement des flèches gauche et droite
arrowRight.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    dotSelection(currentSlideIndex);
});

arrowLeft.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    dotSelection(currentSlideIndex);
});

// affichage du dot sélectionné au chargement de la page
dotSelection(currentSlideIndex);