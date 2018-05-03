const app = angular.module('reviewApp', []);

app.controller('ReviewAppController', function($scope, $http) {
    $http.get('/reviews').then(res => {
        $scope.reviews = res.data;
    });
});