/*Scroll to Top */
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side')
let exit = document.querySelector('.exit');

//When user clicks on burger icon, the side menu is revealed
burger.onclick = function() {
  sideMenu.style.display = "block";
  exit.style.display = "block";
  burger.style.display = "none";
}

//When the user clicks on the X, the side menu is hidden
exit.onclick = function() {
  sideMenu.style.display = "none";
  exit.style.display = "none";
  burger.style.display = "block";
}

//Removes X when page loads
function removeX() {
  exit.style.display = "none";
}
removeX();

//When contact link is clicked, the side menu closes
let contact = document.querySelector('.side__link-contact');
contact.onclick = function() {
  sideMenu.style.display = "none";
  exit.style.display = "none";
  burger.style.display = "block";
}
