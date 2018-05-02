const reviews = require('./review.controllers');

const reviewRoutes = function(app) {
    app.get('/api/reviews', reviews.findAll);
    app.get('/api/reviews/:id', reviews.findById);
    app.post('/api/reviews', reviews.add);
    app.put('/api/reviews/:id', reviews.update);
    app.delete('/api/reviews/:id', reviews.delete);

    app.get('/api/import/reviews', reviews.import);

};

module.exports = reviewRoutes;