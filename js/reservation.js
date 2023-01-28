

        var form = document.getElementById("reservation-form");
      
        // Ajouter un gestionnaire d'événements pour soumettre le formulaire
        form.addEventListener("submit", function(event) {
          event.preventDefault(); // Empêcher la soumission du formulaire par défaut
      
          // Vérifier la validité des champs du formulaire
          if (form.checkValidity()) {
            // Les données du formulaire sont valides, envoyer les données à un script côté serveur pour traitement
            // Code pour envoyer les données à un script côté serveur
          } else {
            // Les données du formulaire sont invalides, afficher un message d'erreur
            document.getElementById("error-message").innerHTML = "Veuillez remplir tous les champs et vérifier que les données saisies sont valides.";
          }
        });