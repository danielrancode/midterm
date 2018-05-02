const mongoose = require('mongoose');
const Review = mongoose.model('Review');


exports.findAll = function(req, res) {
    Review.find({}, function(err, results) {
        return res.send(results);
    });
};
exports.findById = function(req, res) {
    const id = req.params.id;
    Review.findOne({ _id: id }, function(err, result) {
        return res.send(result);
    });
};
exports.add = function(req, res) {
    Review.create(req.body, function(err, review) {
        if (err) return console.log(err);
        return res.send(review);
    });
};
exports.update = function(req, res) {
    const id = req.params.id;
    const updates = req.body;

    Review.update({ _id: id }, updates, function(err) {
        if (err) return console.log(err);
        return res.sendStatus(202);
    });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  Review.remove({ '_id': id }, function (result) {
      return res.send(result);
  });
};

exports.import = function(req, res) {
    // review below refers to the mongoose schema. create() is a mongoose method
    Review.create(
        {
            name: 'review1',
            title: 'Joe\'s Pub',
            date: '2013-09-01',
            description:
            "Horrible place. The burgers tasted like pizzas, the pizzas tasted like hummus, the hummus tasted like no one's business, the business was failing, the failure was unbearable.",
            image: 'resto1.png'
        },
        {
            name: 'review2',
            title: 'Joe\'s Resto',
            date: '2013-09-01',
            description:
            "Horrible place. The mushrooms tasted like rubber, the rubber tasted like chihuahuas, the chihuauas tasted like communism, the communism tasted pretty good though.",
            image : 'resto5.png'
        },    
        {
            name: 'review3',
            title: 'Joe\'s Dive-bar',
            date: '2013-09-01',
            description:
            "Wonderful place, but the food was racist. also, loerm ipsum etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc.",
            image: 'resto3.png'
        },
        {
            name: 'review4',
            title: 'Joe\'s Tavern',
            date: '2013-09-01',
            description:
            "Horrible place. Will only come back here under life threats. Also, make love not war make love not war make love not war make love not war make love not war make love not war make love not war make love not war make love not war make love not war!",
            image: 'resto4.png'
        },
        {
            name: 'review5',
            title: 'Joe\'s Hummus',
            date: '2013-09-01',
            description:
            'Horrible place. The eggs tasted like fish, the fish tasted like eggplant, the eggplant tasted like tomato, the tomato tasted like rubber.',
            image: 'resto5.png'
        },
        function(err) {
            if (err) return console.log(err);
            return res.send(202);
        }
    );
};