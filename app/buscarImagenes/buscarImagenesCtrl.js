var buscarImagenes = angular.module('buscarImagenesApp',[]);

buscarImagenes.controller('buscarImagenesCtrl', ['$scope','$http', function($scope,$http) {
    $scope.inputBusqueda;
    $scope.listaImagenes;
    
    $scope.fetch = function(){
      $http.get('https://api.unsplash.com/search/photos?query=' + $scope.inputBusqueda + '&client_id=bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ')
      .then(function(response){
        $scope.listaImagenes = response.data.results;
      });
    }

    
}])