var client = ShopifyBuy.buildClient({
    domain: 'emporio-747.myshopify.com',
    storefrontAccessToken: '578c7382b0863fbfb7b976a974adcad6', // previously apiKey, now deprecated
});

var ui = ShopifyBuy.UI.init(client);

ui.createComponent('collection', {
    id: 265267675343,
    node: document.getElementById('collection'),
    options: {
        productSet: {
            iframe: false,
            buttonDestination: 'modal',
            moneyFormat: 'R%24%20%7B%7Bamount_with_comma_separator%7D%7D'

        }
    }
})