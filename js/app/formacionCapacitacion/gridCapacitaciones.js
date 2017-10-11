'use strict';


app.controller('gridCapacitacionesCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Miembro habilitado con exito',
  };
    // alert("hola");

var selector=MyService.data.selector;
var seleccionado=MyService.data.seleccionado;
// alert("selector: "+selector+"<br/>"+" seleccionado: "+seleccionado);
$scope.selector=selector;
$scope.seleccionado=seleccionado;
$scope.capacitaciones=[];
$scope.capacitacionesFiltradas=[];
$http.get('http://52.39.15.75:1346/capacitacion').then(function (resp) {
$scope.capacitaciones = resp.data.results;
  for (var i = 0; i < $scope.capacitaciones.length; ++i){
    if(selector=="area"){ 
      if ($scope.capacitaciones[i].area==seleccionado){
          $scope.capacitaciones[i].img="administracion/js/controllers/uploads/"+$scope.capacitaciones[i].img;          
          $scope.capacitacionesFiltradas.push($scope.capacitaciones[i]);
        };
      };
    if(selector=="obligacion"){};
       if ($scope.capacitaciones[i].tipoObligacion==seleccionado){
          $scope.capacitaciones[i].img="administracion/js/controllers/uploads/"+$scope.capacitaciones[i].img;          
          $scope.capacitacionesFiltradas.push($scope.capacitaciones[i]);
        };
      };     
});

$scope.openCurso=function(item){
var idCapacitacion=item.id;
// alert("previo: "+idCapacitacion);

MyService.data.idCapacitacion=idCapacitacion;
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
