const navData = [{path: '/', tmplt: '', title: 'Home', visible: true},
                  {path: '/home', tmplt: '', title: 'Home', visible: true},
                  {path: '/recipes', tmplt: '<recipe-list />', title: 'Recipes', visible: true},
                  {path: '/recipes/:recipeId', tmplt: '<recipe-detail />', title: 'Recipes', visible: false},
                  {path: '/reviews', tmplt: '<review-list />', title: 'Reviews', visible: true},
                  {path: '/reviews/:reviewId', tmplt: '<review-detail />', title: 'Reviews', visible: false},
                  {path: '/delivery', tmplt: '', title: 'Delivery', visible: true},
                  {path: '/about', tmplt: '', title: 'About', visible: true}
                  ];

module.exports = navData;