'use strict';


// app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig,dato,datosSolicitud) {
// $scope.date = moment();
// }]);
app.controller('FacilitadoresCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter','$sce', 'datepickerConfig', 'toaster', '$state',function($scope,$http,$sce, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    // title: 'Exito',
    // type: 'success',
    // text: 'Miembro habilitado con exito',
  };
  // alert("cargado");
  $scope.cargaFacilitadores=function(){
      $scope.items=[];
      $scope.fac='';
         $http.get('http://54.202.62.62:1346/facilitador').then(function (resp) {
        $scope.facilitadores = resp.data.results;
        for (var i = 0; i < $scope.facilitadores.length; ++i){
                  // $scope.facilitadores[i].link="../capacitateMod/detalleCurso.html?id="+$scope.facilitadores[i].id;  
                   $scope.facilitadores[i].img="administracion/js/controllers/uploads/facilitadores/"+$scope.facilitadores[i].img;          
                   $scope.facilitadores[i].img2="administracion/js/controllers/uploads/facilitadores/"+$scope.facilitadores[i].img;
                   $scope.items.push($scope.facilitadores[i]);

               }
                 for (var i = 0; i < $scope.items.length; ++i){
      // $scope.fac=$scope.fac+" <div class=\"owl-carousel-4col\" data-nav=\"true\" ui-refresh=\"items\">"+
      // "<div class=\"item\">"+
      // "<div class=\"hover-effect mb-30\">"+
      // "<div class=\"thumb\">"+
      // "<img class=\"img-fullwidth\" alt=\" src=\""+
      // $scope.items[i].img+
      // "\">"+
      // "<div class=\"hover-link\">"+
      // "<ul class=\"styled-icons icon-dark icon-theme-colored icon-circled icon-sm\">"+
      // "<li><a href=\"http://facebook.com/"+
      // $scope.items[i].cuentaF+
      // "\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>"+
      // "<li><a href=\"http://twitter.com/"+
      // $scope.items[i].cuentaT+
      // "\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>"+
      // "<li><a href=\"http://instagram.com/"+
      //  $scope.items[i].cuentaI+
      //  "\"target=\"_blank\"><i class=\"fa fa-instagram\"></i></a></li>"+
      //  "  </ul></div></div><div class=\"details p-15 pt-10 pb-10\">"+
      //  "<h4 class=\"title mb-5\">"+$scope.items[i].primerNombre+" "+$scope.items[i].primerApellido+
      //  "</h4></div></div></div>";
      //   }
      //   $scope.fac=$scope.fac+"</div>";

      // $scope.fac=$scope.fac+' <div class="owl-carousel-4col" data-nav="true" ui-refresh="items">'+
      // '<div class="item">'+
      // '<div class="hover-effect mb-30">'+
      // '<div class="thumb">'+
      // '<img class="img-fullwidth" alt=" src="'+
      // $scope.items[i].img+
      // '">'+
      // '<div class="hover-link">'+
      // '<ul class="styled-icons icon-dark icon-theme-colored icon-circled icon-sm">'+
      // '<li><a href="http://facebook.com/'+
      // $scope.items[i].cuentaF+
      // '" target="_blank"><i class="fa fa-facebook"></i></a></li>'+
      // '<li><a href="http://twitter.com/'+
      // $scope.items[i].cuentaT+
      // '" target="_blank"><i class="fa fa-twitter"></i></a></li>'+
      // '<li><a href="http://instagram.com/'+
      //  $scope.items[i].cuentaI+
      //  '"target="_blank"><i class="fa fa-instagram"></i></a></li>'+
      //  '  </ul></div></div><div class="details p-15 pt-10 pb-10">'+
      //  '<h4 class="title mb-5">'+$scope.items[i].primerNombre+' '+$scope.items[i].primerApellido+
      //  '</h4></div></div></div>'; 
      //   }
      //   $scope.fac=$scope.fac+'</div>';
}

              });
  };


        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.body = $scope.fac; 



  $scope.cargaFacilitadores();
  // $scope.selectorObligaciones=function(){
  //     $scope.items=[];
  //        $http.get('http://54.202.62.62:1346/obligacion').then(function (resp) {
  //       $scope.obligacionesLaborales = resp.data.results;
  //       for (var i = 0; i < $scope.obligacionesLaborales.length; ++i){
  //                 // $scope.obligacionesLaborales[i].link="../capacitateMod/detalleCurso.html?id="+$scope.obligacionesLaborales[i].id;  
  //                  $scope.obligacionesLaborales[i].img="administracion/js/controllers/uploads/works/"+$scope.obligacionesLaborales[i].img;          $scope.obligacionesLaborales[i].img2="administracion/js/controllers/uploads/works/"+$scope.obligacionesLaborales[i].img;
  //                  $scope.items.push($scope.obligacionesLaborales[i]);
  //              }
  //       });
  // };

// $scope.selectorM=function(item){
//   // alert("hola");
//   if (item.selector=="area"){
//     $scope.selectorAreas();
//     MyService.data.selector="area";
//   }
//   if (item.selector=="obligacion"){
//     $scope.selectorObligaciones();
//     MyService.data.selector="obligacion";
//   };
// };

//  $scope.irAGrid = function(item){
//   var seleccionado = item.nombre;
//   MyService.data.seleccionado=seleccionado;
// // alert("seleccion: "+area);

//  };
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
