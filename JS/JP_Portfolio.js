/******** JAVASCRIPT FOR PORTFOLIO WEBSITE *********/

//Form Validation
function validatePhone() {
    //gets value of input with id="numb"
    let phoneNumber = document.getElementById("Phone").value;
    //If phoneNumber is not a number:
    let text;
    if (isNaN(phoneNumber)) {
        text = "Must be a valid phone number";
    } else {
        text = "";
    }
    document.getElementById("error").innerHTML = text;
}

//Opens contact form.
function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

//Closes contact form.
function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

//Slideshow (jquery)
$("#slideShow > div:gt(0)").hide();

setInterval(function() {
    $('#slideShow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideShow');
}, 3000);