const fetch = require('node-fetch');
const partNumber = "2000379450763,2000360043691,2000379907854";
const url = `https://simple.ripley.cl/api/v2/products?format=json&partNumbers=${partNumber}`;

exports.getItems = (req, res) => {
    fetch(url)
    .then((response)=> response.json())
    .then(items => {
        items = items.map(product => {
            var prices = product.prices;
            var shipping = product.shipping;

            return {
                uniqueID: product.uniqueID,
                partNumber: product.partNumber,
                name: product.name,
                prices: {
                    offerPrice: prices.offerPrice,
                    listPrice: prices.listPrice,
                    discount: prices.discount,
                    discountPercentage: prices.discountPercentage,
                    ripleyPuntos: prices.ripleyPuntos,
                    formattedOfferPrice: prices.formattedOfferPrice,
                    formattedListPrice: prices.formattedListPrice,
                    formattedDiscount: prices.formattedDiscount
                },
                shortDescription: product.shortDescription,
                shipping: {
                    rTienda: shipping.rTienda,
                    dDomicilio: shipping.dDomicilio,
                    rCercano: shipping.rCercano,
                    cashOnDelivery: shipping.cashOnDelivery
                },
                parentProductId: product.parentProductId,
                xCatEntryCategory: product.xCatEntryCategory,
                parentProductID: product.parentProductID,
                isMarketplaceProduct: product.isMarketplaceProduct,
                url: product.url,
                thumbnailImage: product.thumbnailImage,
                single: product.single
            }
        });
        res.send(items);
    })
    .catch(err => console.log(err))
}