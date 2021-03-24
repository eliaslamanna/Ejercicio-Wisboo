var myApp = angular.module('myApp',['ngRoute','buscarImagenesApp','imagenesGuardadasApp']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo: "/buscar"
    })
    .when("/buscar", {
      template: '<buscar-imagenes></buscar-imagenes>'
    })
    .when("/imagenesGuardadas", {
      template: '<imagenes-guardadas></imagenes-guardadas>'
    })
}]);

myApp.controller('appCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.imagenesGuardadas = [];
  $rootScope.listaImagenes = [];
  $rootScope.limite = 4;
}])

myApp.component('imagenesGuardadas', {
  templateUrl: "imagenesGuardadas/imagenesGuardadas.html",
  controller: "imagenesGuardadasCtrl"
});

myApp.component('buscarImagenes', {
  templateUrl: "buscarImagenes/buscarImagenes.html",
  controller: "buscarImagenesCtrl"
});