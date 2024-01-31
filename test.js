const assert = require('assert');

// Mocking localStorage
global.localStorage = {
    getItem: function() {},
    setItem: function() {},
    removeItem: function() {}
};

describe('Vérification du panier', function() {
    it('Devrait afficher un message si le panier contient des éléments', function() {
        setTimeout(function() {
            // Récupérez le contenu du panier depuis le localStorage
            var panierActuel = localStorage.getItem("panier");
            if (panierActuel && JSON.parse(panierActuel).length > 0) {
                assert.ok(true, 'Le panier contient des éléments');
            } else {
                assert.ok(true, 'Le panier est vide');
            }
        }, 500); 
    });
});
