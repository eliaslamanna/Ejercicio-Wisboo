var buscarImagenes = angular.module('buscarImagenesApp',[]);

buscarImagenes.controller('buscarImagenesCtrl', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    $scope.inputBusqueda;
    $scope.listaImagenes;
    
    $scope.fetch = function(){
      $http.get('https://api.unsplash.com/search/photos?query=' + $scope.inputBusqueda + '&client_id=bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ')
      .then(function(response){
        $scope.listaImagenes = response.data.results;
      });
    }

    $scope.guardarImagen = function(urlImagen) {
      $rootScope.imagenesGuardadas.push(urlImagen);
    }

    
}])