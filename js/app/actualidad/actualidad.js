'use strict';

app.controller('actualidadCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Miembro habilitado con exito' 
  };

$scope.vectorNoticias=[];
  $http.get('http://52.39.15.75:1346/noticia').then(function (resp) {
    $scope.noticias = resp.data.results;
    for (var i = 0; i < $scope.noticias.length; ++i){
          // $scope.noticias[i].link="../capacitateMod/detalleCurso.html?id="+$scope.noticias[i].id;  
           $scope.noticias[i].img="/administracion/js/controllers/uploads/works/"+$scope.noticias[i].img;          $scope.noticias[i].img2="dministracion/js/controllers/uploads/works/"+$scope.noticias[i].img;
           $scope.vectorNoticias.push($scope.noticias[i]);
       }
  });


    $scope.today = function() {
      $scope.fechaInicio = new Date();
    };
    // $scope.today();

    $scope.clear = function () {
      $scope.fechaFin = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
     $scope.open2 = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened2 = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = 'MM/dd/yyyy';
    $scope.tbOptionsPendientes = {
    filterText: ''};
    $scope.filter = '';
     
    
    $scope.filter = '';
    

 

}]);
