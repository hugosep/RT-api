const fetch = require('node-fetch')

exports.getItemsDetail = (req, res) => {
    const partNumber = req.params.partNumber
    const url = `https://simple.ripley.cl/api/v2/products?format=json&partNumbers=${partNumber}`
    fetch(url)
    .then( response => response.json())
    .then( product => { res.send(product) })
    .catch(err => console.log(err))
}