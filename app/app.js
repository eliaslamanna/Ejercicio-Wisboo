var myApp = angular.module('myApp',['ngRoute','buscarImagenesApp','imagenesGuardadasApp']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo: "/buscar"
    })
    .when("/buscar", {
      templateUrl:"buscarImagenes/buscarImagenes.html",
      controller:"buscarImagenesCtrl"
    })
    .when("/imagenesGuardadas", {
      templateUrl:"imagenesGuardadas/imagenesGuardadas.html",
      controller:"imagenesGuardadasCtrl"
    })
}]);

myApp.controller('appCtrl', ['$scope', function($scope) {

  //$scope.accesKey = "bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ";
  //$scope.endPoint = "https://unsplash.com/documentation#search-photos";

  $scope.saludo = 'Hola!';
}])