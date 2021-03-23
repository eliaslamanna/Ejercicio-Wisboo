var imagenesGuardadas = angular.module('imagenesGuardadasApp',[]);

imagenesGuardadas.controller('imagenesGuardadasCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
    $scope.limiteGuardados = 4;

    
    for (var i = 0; i < window.localStorage.length; i++){
      var imagenActual = window.localStorage.getItem(window.localStorage.key(i));
      if($rootScope.imagenesGuardadas.indexOf(imagenActual) === -1) {
        $rootScope.imagenesGuardadas.push(imagenActual);
      }      
    }

    $scope.agrandar = function() {
      $scope.limiteGuardados += 4;
    }
}])