// Importez la bibliothèque assert si elle n'est pas déjà incluse dans votre projet
// const assert = require('assert');

describe('Vérification du panier', function() {
    it('Devrait afficher une alerte si le panier contient des éléments', function() {
        // Attendez un peu pour laisser le temps au panier d'être potentiellement mis à jour
        setTimeout(function() {
            // Récupérez le contenu du panier depuis le localStorage
            var panierActuel = localStorage.getItem("panier");

            // Vérifiez si le panier contient quelque chose
            if (panierActuel && JSON.parse(panierActuel).length > 0) {
                // Affiche une alerte avec le message "Le panier contient des éléments"
                alert('Le panier contient des éléments');
            } else {
                // Affiche une alerte avec le message "Le panier est vide"
                alert('Le panier est vide');
            }
        }, 500); // Attendez 500 millisecondes (ajustez selon vos besoins)
    });
});
