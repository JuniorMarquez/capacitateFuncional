'use strict';


// app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig,dato,datosSolicitud) {
// $scope.date = moment();
// }]);
app.controller('cursosCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    // title: 'Exito',
    // type: 'success',
    // text: 'Miembro habilitado con exito',
  };
  $scope.vectorAreas=[];
 $http.get('http://54.202.62.62:1346/areaConocimiento').then(function (resp) {
$scope.areasConocimiento = resp.data.results;
for (var i = 0; i < $scope.areasConocimiento.length; ++i){
          // $scope.areasConocimiento[i].link="../capacitateMod/detalleCurso.html?id="+$scope.areasConocimiento[i].id;  
           $scope.areasConocimiento[i].img="administracion/js/controllers/uploads/works/"+$scope.areasConocimiento[i].img;          $scope.areasConocimiento[i].img2="administracion/js/controllers/uploads/works/"+$scope.areasConocimiento[i].img;
           $scope.vectorAreas.push($scope.areasConocimiento[i]);
       }
});
 $scope.irAGrid = function(item){
  var area = item.nombre;
MyService.data.areaSeleccionada=area;
// alert("seleccion: "+area);

 };
$scope.miembros = [];
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
      $scope.tbOptionsPendientes = {
      bDestroy: true,
      pageLength: 150,
      data: []                                              
    };
    
    $scope.filter = '';


}]);
