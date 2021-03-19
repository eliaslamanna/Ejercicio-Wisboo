var buscarImagenes = angular.module('buscarImagenesApp',[]);

buscarImagenes.controller('buscarImagenesCtrl', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    
    $scope.limite = 0;

    $scope.agrandar = function() {
      $scope.limite += 3;
    }

    $scope.fetch = function(){
      $http.get('https://api.unsplash.com/search/photos?query=' + $scope.inputBusqueda + '&client_id=bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ')
      .then(function(response){
        $scope.listaImagenes = response.data.results;
        $scope.limite += 3;
      });
    }

    $scope.guardarImagen = function(imagen) {
      if ($rootScope.imagenesGuardadas.indexOf(imagen.urls.thumb) == -1){
        $rootScope.imagenesGuardadas.push(imagen.urls.thumb);
        imagen.liked_by_user = true;
      }
      else {
        imagen.liked_by_user = true;
        alert("La imagen ya se guardo anteriormente");
      }
    }

    
}])