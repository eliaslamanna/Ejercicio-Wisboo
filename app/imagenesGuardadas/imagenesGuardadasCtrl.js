var imagenesGuardadas = angular.module('imagenesGuardadasApp',[]);

imagenesGuardadas.controller('imagenesGuardadasCtrl', ['$scope', function($scope) {
    $scope.saludo = 'anduvo imagenes guardadas';
  }])