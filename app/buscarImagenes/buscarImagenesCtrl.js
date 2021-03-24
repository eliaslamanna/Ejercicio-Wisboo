var buscarImagenes = angular.module('buscarImagenesApp',[]);

buscarImagenes.controller('buscarImagenesCtrl', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    
    this.agrandar = function() {
      $rootScope.limite += 4;
    }

    this.ultimaBusqueda;

    this.fetch = function(){
      $http.get('https://api.unsplash.com/search/photos?query=' + this.inputBusqueda + '&client_id=bJhE54az5ubJOXvHNtLFBZoUfpZ6VLQgyJ-sh7xp0WQ')
      .then(function(response){
        if(this.ultimaBusqueda != this.inputBusqueda) {
          $rootScope.limite = 4;
        }
        $rootScope.listaImagenes = response.data.results;
        this.ultimaBusqueda = this.inputBusqueda;
      });
    }

    this.guardarImagen = function(imagen) {
      if ($rootScope.imagenesGuardadas.indexOf(imagen.urls.thumb) == -1){
        window.localStorage.setItem(imagen.id, imagen.urls.thumb);
        imagen.liked_by_user = true;
      }
      else {
        imagen.liked_by_user = true;
        alert("La imagen ya se guardo anteriormente");
      }
    }
  
}])