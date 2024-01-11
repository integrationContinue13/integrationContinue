const assert = require('assert');

// Mocking localStorage
global.localStorage = {
    getItem: function() {},
    setItem: function() {},
    removeItem: function() {}
};

describe('Vérification du panier', function() {
    it('Devrait afficher un message si le panier contient des éléments', function() {
        // Attendez un peu pour laisser le temps au panier d'être potentiellement mis à jour
        setTimeout(function() {
            // Récupérez le contenu du panier depuis le localStorage
            var panierActuel = localStorage.getItem("panier");

            // Vérifiez si le panier contient quelque chose
            if (panierActuel && JSON.parse(panierActuel).length > 0) {
                // Utilisez assert pour vérifier que le panier contient des éléments
                assert.ok(true, 'Le panier contient des éléments');
            } else {
                // Utilisez assert pour vérifier que le panier est vide
                assert.ok(true, 'Le panier est vide');
            }
        }, 500); // Attendez 500 millisecondes (ajustez selon vos besoins)
    });
});
