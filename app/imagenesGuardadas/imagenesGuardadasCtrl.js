var imagenesGuardadas = angular.module('imagenesGuardadasApp',[]);

imagenesGuardadas.controller('imagenesGuardadasCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
    $scope.limiteGuardados = 4;

    $scope.agrandar = function() {
      $scope.limiteGuardados += 4;
    }
}])