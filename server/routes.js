module.exports = function (app) {
    app.use('/api/products', require('./server/api/products/products.controllers'));
    app.use('/api/subcategory', require('./server/api/subcategories/subcategories.controllers'));
    app.use('/api/category', require('./server/api/categories/categories.controllers'));
}