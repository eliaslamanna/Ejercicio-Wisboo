var buscarImagenes = angular.module('buscarImagenesApp',[]);

buscarImagenes.controller('buscarImagenesCtrl', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    
    $scope.fetch = function(){
      $http.get('https://api.unsplash.com/search/photos?query=' + $scope.inputBusqueda + '&client_id=bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ')
      .then(function(response){
        $scope.listaImagenes = response.data.results;
      });
    }

    $scope.guardarImagen = function(imagen) {
      if ($rootScope.imagenesGuardadas.indexOf(imagen.urls.thumb) == -1){
        $rootScope.imagenesGuardadas.push(imagen.urls.thumb);
        alert("Se guardo la imagen");
        imagen.liked_by_user = true;
      }
      else {
        imagen.liked_by_user = true;
        alert("La imagen ya se guardo anteriormente");
      }
    }

    
}])