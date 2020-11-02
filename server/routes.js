module.exports = function (app) {
    app.use('/api/products', require('./server/api/products/products.controllers'));
    app.use('/api/subcategory', require('./server/api/subcategories/subcategories.controllers'));
    app.use('/api/category', require('./server/api/categories/categories.controllers'));
    app.use('/api/user', require('./server/api/users/users.controllers'));
    app.use('/api/orders', require('./server/api/orders/order.controllers'));
}