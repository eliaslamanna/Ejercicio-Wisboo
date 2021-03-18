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

myApp.controller('appCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.imagenesGuardadas = [];
}])