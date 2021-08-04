/***********Javascript for JP portfolio **************/

//Open/Close funcs for contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Displays first img in slideshow on page load.
var slideIndex = 1;
showSlides(slideIndex);

//Changes slide when Next/Prev arrows are clicked.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Changes slide when dots are clicked.
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //Takes elements with class "mySlides", stores in var array "slides".
    var dots = document.getElementsByClassName("dot"); //Takes elements with class "dot", stores in var array "dots".
    if (n > slides.length) {slideIndex = 1}; // If n is greater than length of array "slides", slideIndex set to 1.
    if (n < 1) {slideIndex = slides.length}; // If n is less than 1, slideIndex set to length of array "slides".
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Takes each array item in "slides", sets display to none.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Takes each item in "dots" array, removes "active"(removes active styling).
    }
    slides[slideIndex - 1].style.display = "block"; //Displays img in slideshow.
    dots[slideIndex - 1].className += " active"; //Adds active styling to dot associated with img.
}