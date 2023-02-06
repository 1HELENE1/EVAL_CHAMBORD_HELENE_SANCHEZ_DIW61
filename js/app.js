// $(document).ready(() => {}) fonction fleché anonyme
$(document).ready(function () {
  // alert qui apparaisse sur sur le bouton GB et disparaisse seule, ne fonctionne pas
  // $('#gb').on('click', function(){
  //   alert('gb non dispo');
  //   $(this).css('background', 'lightgreen');
  // });

  // ne fonctionne que sur un "anim", comment le dupliquer
  /**
   * Je met le mot clés liste devant un tableau => array []
   */
  // jquery methode
  // $('.anim').hover(function() {
  //   this.style.transform = "scale(1.2)";
  // },function() {
  //   this.style.transform = "scale(1)";
  // })

  const listeAnim = document.querySelectorAll('.anim')
  listeAnim.forEach(function (anim) {
    anim.addEventListener('mouseover', function () {
      anim.style.transform = 'scale(1.2)'
    })
    anim.addEventListener('mouseout', function () {
      anim.style.transform = 'scale(1)'
    })
  })
})

// <!-- apparition en fondu -->
// <button id="fadeIn">Apparition en fade</button>
// <div id="vert" style="width: 100px; height:100px; background:green; margin: 20px; display: none;"></div>
