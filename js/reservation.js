

        var form = document.getElementById("reservation");
          form.addEventListener("submit", function(event) {
          event.preventDefault(); 
          if (form.checkValidity()) {
          
          } else {
            document.getElementById("error-message").innerHTML = "Veuillez remplir tous les champs et vérifier que les données saisies sont valides.";
          }
        });

        // function calculateTotal() {
        //   const restaurant = parseFloat(document.getElementById("restaurant").value);
        //   const spa = parseFloat(document.getElementById("spa").value);
        //   const chambre = parseFloat(document.getElementById("chambres").value);
        //   const total = item1 + item2 + item3;
        //   document.getElementById("total").value = total;
        // }
        