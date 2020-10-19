module.exports = function (app) {
    app.use('/api/products', require('./server/api/products/products.controllers'));
}