'use strict';




// app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig,dato,datosSolicitud) {
// $scope.date = moment();
// }]);
app.controller('contactoCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    titleM: 'Exito',
    typeM: 'success',
    textM: 'Mensaje Enviado con Éxito'
  };
  // alert("cargado");

   $scope.popMensaje = function(){
      toaster.pop($scope.toaster.typeM, $scope.toaster.titleM, $scope.toaster.textM);
    };

    $scope.mensajeContacto=function(item){
      $http.post('http://54.202.62.62:1346/mensaje',item)
      // alert("lala");
      $scope.popMensaje();
    };

      $http.get('http://54.202.62.62:1346/emailcorporativo/').then(function (resp) {
        $scope.emails = resp.data.results;
      });

$http.get('http://54.202.62.62:1346/contacto').success(function(respuesta){
  $scope.contacto = respuesta.results[0];
        $scope.direccion=$scope.contacto.direccion;
        $scope.telefono1=$scope.contacto.telefono1;
        $scope.telefono2=$scope.contacto.telefono2;
        $scope.instagram=$scope.contacto.instagram;
        $scope.facebook=$scope.contacto.facebook;
        $scope.twitter=$scope.contacto.twitter;
        $scope.telefonoMovil=$scope.contacto.telefonoMovil;
        $scope.contactoLineal=$scope.contacto.contactoLineal;
        $scope.emailContacto=$scope.contacto.emailContacto;
        });
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
