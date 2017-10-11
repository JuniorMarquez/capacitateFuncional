'use strict';

app.controller('publicacionesCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Miembro habilitado con exito' 
  };

$scope.vectorPublicaciones=[];
  $http.get('http://52.39.15.75:1346/publicacion').then(function (resp) {
    $scope.publicaciones = resp.data.results;
    for (var i = 0; i < $scope.publicaciones.length; ++i){
          // $scope.publicaciones[i].link="../capacitateMod/detalleCurso.html?id="+$scope.publicaciones[i].id;  
           $scope.publicaciones[i].img="/administracion/js/controllers/uploads/works/"+$scope.publicaciones[i].img;          $scope.publicaciones[i].img2="administracion/js/controllers/uploads/works/"+$scope.publicaciones[i].img;
           $scope.vectorPublicaciones.push($scope.publicaciones[i]);
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
