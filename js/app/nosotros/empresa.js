'use strict';


// app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig,dato,datosSolicitud) {
// $scope.date = moment();
// }]);
app.controller('IncompanyCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    // title: 'Exito',
    // type: 'success',
    // text: 'Miembro habilitado con exito',
  };
  // alert("cargado");
  $scope.selectorAreas=function(){
      $scope.items=[];
         $http.get('http://52.39.15.75:1346/areaConocimiento').then(function (resp) {
        $scope.areasConocimiento = resp.data.results;
        for (var i = 0; i < $scope.areasConocimiento.length; ++i){
                  // $scope.areasConocimiento[i].link="../capacitateMod/detalleCurso.html?id="+$scope.areasConocimiento[i].id;  
                   $scope.areasConocimiento[i].img="/administracion/js/controllers/uploads/works/"+$scope.areasConocimiento[i].img;          $scope.areasConocimiento[i].img2="administracion/js/controllers/uploads/works/"+$scope.areasConocimiento[i].img;
                   $scope.items.push($scope.areasConocimiento[i]);
               }
        });
  };
  $scope.selectorObligaciones=function(){
      $scope.items=[];
         $http.get('http://52.39.15.75:1346/obligacion').then(function (resp) {
        $scope.obligacionesLaborales = resp.data.results;
        for (var i = 0; i < $scope.obligacionesLaborales.length; ++i){
                  // $scope.obligacionesLaborales[i].link="../capacitateMod/detalleCurso.html?id="+$scope.obligacionesLaborales[i].id;  
                   $scope.obligacionesLaborales[i].img="/administracion/js/controllers/uploads/works/"+$scope.obligacionesLaborales[i].img;          $scope.obligacionesLaborales[i].img2="administracion/js/controllers/uploads/works/"+$scope.obligacionesLaborales[i].img;
                   $scope.items.push($scope.obligacionesLaborales[i]);
               }
        });
  };

$scope.selectorM=function(item){
  // alert("hola");
  if (item.selector=="area"){
    $scope.selectorAreas();
    MyService.data.selector="area";
  }
  if (item.selector=="obligacion"){
    $scope.selectorObligaciones();
    MyService.data.selector="obligacion";
  };
};

 $scope.irAGrid = function(item){
  var seleccionado = item.nombre;
  MyService.data.seleccionado=seleccionado;
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
