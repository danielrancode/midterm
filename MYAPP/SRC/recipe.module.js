const app = angular.module('recipeApp', []);

app.controller('RecipeAppController', function($scope, $http) {
    $http.get('/recipes').then(res => {
        $scope.recipes = res.data;
    });
});