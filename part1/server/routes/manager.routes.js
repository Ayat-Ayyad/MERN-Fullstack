const ProductController = require('../controller/manager.controller');

module.exports = function(app) {
    app.get('/api/product', ProductController.allProducts);
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}