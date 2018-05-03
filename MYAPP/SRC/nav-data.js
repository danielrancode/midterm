const navData = [{path: '/', tmplt: '', title: '/', class: 'invisible'},
                  {path: '/home', tmplt: '', title: 'Home', class: 'panel1'},
                  {path: '/recipes', tmplt: '<recipe-list />', title: 'Recipes', class: 'panel2'},
                  {path: '/recipes/:recipeId', tmplt: '<recipe-detail />', title: 'Recipes:recipeId', class: 'invisible'},
                  {path: '/reviews', tmplt: '<review-list />', title: 'Reviews', class: 'panel3'},
                  {path: '/reviews/:reviewId', tmplt: '<review-detail />', title: 'Reviews:reviewId', class: 'invisible'},
                  {path: '/delivery', tmplt: '', title: 'Delivery', class: 'panel4'},
                  {path: '/about', tmplt: '', title: 'About', class: 'panel5'},
                  ];

module.exports = navData;