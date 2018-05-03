
import angular from 'angular';
import ngRoute from 'angular-route';
const app = angular.module('foodApp', ['ngRoute']);

// **** import navData ****  
const navData = require ('./nav-data');

// ***** generate route config *****
app.config(function ($locationProvider, $routeProvider) {
  var item;
  for (item in navData) {
    $routeProvider.when(navData[item].path, {template: navData[item].tmplt})
    };  
  $locationProvider.html5Mode(true);
});

// ***** NavController *****
app.controller('NavController', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    var active = viewLocation === $location.path();
    // console.log(viewLocation + ' ' + active);
    return active;
  };
});


// ***************** COMPONENTS ********************


// ***** navbar  *****

app.component('navbar', {
  templateUrl: '/includes/navbar.html',
  // template: `
  //     <nav ng-controller="NavController">
  //       <div class="panels">
  //         <div data-ng-repeat="item in navData" class="panel {{item.class}}" ng-class="{ active: isActive('{{item.path}}') }">
  //           <a href="{{item.path}}">
  //           {{item.title}}
  //           </a>
  //         </div>
  //       </div>
  //     </nav>`,
    controller: function($scope) {
      $scope.navData = navData;
    }
  });


// ***** recipeList *****

app.component('recipeList', {
  templateUrl: '/includes/recipes.html',
  controller: function RecipeAppController($http, $scope) {
    $http.get('/api/recipes').then(res => {
      $scope.recipes = res.data;
      });

    $scope.deleteRecipe = function(index, recipeid) {
        $http.delete('/api/recipes/' + recipeid).then(() => $scope.recipes.splice(index, 1));
      };

    $scope.addRecipe = function(data) {
      $http.post('/api/recipes/', data).then(res => {
          console.log(res.data);
          $scope.recipes.push(res.data);
          $scope.recipe = {};
          })
        }
      }
  });


// ***** recipeDetail *****

app.component('recipeDetail', {
  templateUrl: '/includes/recipe.html',
  controller: function RecipeDetailController($http, $routeParams) {
    $http.get('/api/recipes/' + $routeParams.recipeId).then(response => (this.recipe = response.data));
    
    this.back = () => window.history.back();
    
    this.editorEnabled = false;
    this.toggleEditor = () => (this.editorEnabled = !this.editorEnabled);
    
    this.saveRecipe = (recipe, recipeid) => {
      $http.put('api/recipes/' + recipeid, recipe).then(res => (this.editorEnabled = false));
    };
  }
});


// ***** reviewList *****

app.component('reviewList', {
  templateUrl: '/includes/reviews.html',
  controller: function RecipeAppController($http, $scope) {
    $http.get('/api/reviews').then(res => {
      $scope.reviews = res.data;
      });

    $scope.deleteReview = function(index, reviewid) {
      $http.delete('/api/reviews/' + reviewid).then(() => $scope.reviews.splice(index, 1));
      };

    $scope.addReview = function(data) {
      $http.post('/api/reviews/', data).then(res => {
        console.log(res.data);
        $scope.reviews.push(res.data);
        $scope.review = {};
        });
      };
    }
  });


// ***** reviewDetail *****

app.component('reviewDetail', {
  templateUrl: '/includes/review.html',
  controller: function ReviewDetailController($http, $routeParams) {
    $http.get('/api/reviews/' + $routeParams.reviewId).then(response => (this.review = response.data));
    
    this.back = () => window.history.back();
    
    this.editorEnabled = false;
    this.toggleEditor = () => (this.editorEnabled = !this.editorEnabled);
    
    this.saveReview = (review, reviewid) => {
      $http.put('api/reviews/' + reviewid, review).then(res => (this.editorEnabled = false));
      };
    }
  });