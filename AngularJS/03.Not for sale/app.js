(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems =
    [
        {
            name: 'Laptop Asus',
            price: 110.50,
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Laptop HP',
            price: 120.99,
            canPurchase: false,
            soldOut: true
        },
        {
            name: 'Laptop Asus New',
            price: 220,
            canPurchase: false,
            soldOut: false
        }
    ];
})();
