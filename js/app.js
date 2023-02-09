// $(document).ready(() => {}) fonction fleché anonyme
$(document).ready(function () {

  // ANIMATION OVER SUR IMG ACCUEIL
  const listeAnim = document.querySelectorAll('.anim')
  listeAnim.forEach(function (anim) {
    anim.addEventListener('mouseover', function () {
      anim.style.transform = 'scale(1.2)'
    })
    anim.addEventListener('mouseout', function () {
      anim.style.transform = 'scale(1)'
    })
  })
// // SEARCH
function searchPage(){
  var produit = document.getElementById("searchbar").value;
  if(a==="chambre"){
    window.open("/html/chambre.html")
  }
  if(a==="restaurant"){
    window.open("/html/restaurant.html")
  }
  if(a==="spa"){
    window.open("/html/spa.html")
    }
}

});