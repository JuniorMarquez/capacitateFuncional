'use strict';

/* Controllers */

app
  // Flot Chart controller 
  .controller('FlotChartDemoCtrl', ['$scope', '$http','$modal','MyService','$state','$filter','datepickerConfig','toaster',function($scope,$http,$modal,MyService,$state,$filter,datepickerConfi,toaster) {
//       if (typeof MyService.data.email==="undefined"){
//   $state.go('access.signin');
// }
// $scope.visor = function(pie) {
//     var pie = document.getElementById(pie).innerHTML;
//    if (pie){
//     return (false);
//    }
// };


 $scope.popSuscripcion = function(){
    toaster.pop($scope.toaster.typeS, $scope.toaster.titleS, $scope.toaster.textS);
  };


$scope.suscripcionFooter=function(item){
  // alert("nombre: "+item.nombre);
  item.tipoSuscripcion="footer";
  item.status="pendiente";
  $http.post('http://52.39.15.75:1346/suscripcion',item)
  $scope.popSuscripcion();
};

$scope.openPostulacion = function () {

var dato="";
      var datosCuenta="";
      var item={};
 // var identificador=item.id;
 //    MyService.data.idenCapacitacionInscripcion = identificador;
        var modalInstance = $modal.open({
        templateUrl: 'modalPostulacion.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {
            dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
   });

};


$scope.congiguracion=[];
$scope.vectorCapacitaciones=[];
$scope.vectorCursos1=[];
  var tempArr = [];
 var i=0;
 $http.get('http://52.39.15.75:1346/contacto').success(function(respuesta){
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
 $http.get('http://52.39.15.75:1346/capacitacion').then(function (resp) {
$scope.vectorCapacitaciones = resp.data.results;
$scope.vectorCapacitaciones=$scope.vectorCapacitaciones.reverse();
for (var i = 0; i < 4; ++i){
        if ($scope.vectorCapacitaciones[i].tipoCapacitacion=="Curso"){
          $scope.vectorCapacitaciones[i].link="../capacitateMod/detalleCurso.html?id="+$scope.vectorCapacitaciones[i].id;
            $scope.vectorCapacitaciones[i].img="administracion/js/controllers/uploads/"+$scope.vectorCapacitaciones[i].img;
            $scope.vectorCursos1.push($scope.vectorCapacitaciones[i]);
            }
       }
       // alert("tamaño: "+$scope.vectorCursos.length);
});

  $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Datos de cuenta actualizados con exito',
    titleS: 'Exito',
    typeS: 'success',
    textS: 'Suscripción realizada con éxito'
  };
  $scope.filter = '';
if ($scope.app.status=="pendiente"){$scope.vigilante="no"};
if ($scope.app.status=="actualizado"){$scope.vigilante="si"};
  $scope.pop = function(){
    toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
  };
    $scope.item={};
        var result = [];

  
  
 
$scope.estados = ['soltero(a)','casado(a)','divorciado(a)','viudo(a)'];
 $scope.nacionalidades = ['V','E'];
// $scope.municipios = ['libertad','independencia','cordova','san cristobal'];
// $scope.universidades =[ 'ULA','LUZ'];
// $scope.especialidades = [ 'Ortodoncia','Endodoncia'];
        
        $scope.anos=[];
        for (var i = 0; i < 88; ++i)
          {
            result.push(i+1930);
           $scope.anos=result;
        };

      var dato="";
  var datosCuenta="";
  $scope.nombre=MyService.data.nombre;

$scope.cargador=function()
{
  $scope.consultaMiembroDeArchivo();
  // alert("array:" +$scope.item2[2].primerNombre);

};



  $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.totalMiembros=0;
    $scope.consultores=[];
   
  $scope.openMision = function () {

// var dato="";
      var datosCuenta="";
      var item={};
//     $scope.item={};
    // $http.get('http://52.39.15.75:1345/configuracion').success(function(respuesta){
    //     $scope.configuracion = respuesta.results[0];
    //     $scope.item.mision=respuesta.results[0].mision; 
    // });
    // setTimeout(function() {    
    //   datosCuenta=$scope.item;
    //   $scope.item.datosCuenta=datosCuenta;
    //   MyService.data.mision=$scope.item.mision;
    // }, 300);
    // $scope.item.datosCuenta=datosCuenta;
    // setTimeout(function() {  
        // $scope.item.mision=MyService.data.mision;
       
        // var item=[];
        // item=$scope.item;
        //  // alert ("hola"+item.mision);
        //  // var datosCuenta=[];
        //  datosCuenta=item;
        //  alert(""+datosCuenta.mision);
        var modalInstance = $modal.open({
        templateUrl: 'modalMision.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {
            dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
   });

};





    $scope.openListadoEspecialidades = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoEspecialidades.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.openDeporte = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalDeporte.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };
    $scope.openElectoral = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalElectoral.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };





  $scope.openDirectiva = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalDirectiva.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $scope.openComite = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalComite.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.openMantenimiento = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalMantenimiento.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };



  $scope.openEspecialidad = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalEspecialidad.html',
        controller: 'ModalInstanceCtrl',
        size: 'sm',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.openListadoDirectiva = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoDirectiva.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };
   $scope.openListadoDeporte = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoDeporte.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

   $scope.openListadoElectoral = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoElectoral.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.openListadoComite = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoComite.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.openListadoUniversidades = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoUniversidades.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openUniversidad = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalUniversidad.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };


  // Municipios 

    $scope.openListadoMunicipios = function (item) {
    // var identificador=item.id;
    // MyService.data.identificador = identificador;
      var modalInstance = $modal.open({
        templateUrl: 'modalListadoMunicipios.html',
        controller: 'ModalInstanceCtrl',
        size: 'sm',
        resolve: {

           dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openMunicipio = function (item) {

      var modalInstance = $modal.open({
        templateUrl: 'modalMunicipio.html',
        controller: 'ModalInstanceCtrl',
        size: 'sm',
        resolve: {
              dato: function  () {
            return item;
            // body...
          },
           datosCuenta: function  () {
            return datosCuenta;
            // body...
          },
          items: function () {
            return $scope.items;
          }
        }
      });
    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

   // Fin municipios 


    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 





  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {

    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };


    $scope.d = [ [1,12],[2,11],[3,12],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7] ];

    $scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ];

    $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

    $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

    $scope.d1_2 = [ [10, 50], [20, 60], [30, 90], [40, 35] ];

    $scope.d1_3 = [ [10, 80], [20, 40], [30, 30], [40, 20] ];

    $scope.d2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.d2.push([i, Math.sin(i)]);
    }   

    $scope.d3 = [ 
      { label: "iPhone5S", data: 40 }, 
      { label: "iPad Mini", data: 10 },
      { label: "iPad Mini Retina", data: 20 },
      { label: "iPhone4S", data: 12 },
      { label: "iPad Air", data: 18 }
    ];

    $scope.refreshData = function(){
      $scope.d0_1 = $scope.d0_2;
    };

    $scope.getRandomData = function() {
      var data = [],
      totalPoints = 150;
      if (data.length > 0)
        data = data.slice(1);
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }
        data.push(y);
      }
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }
      return res;
    }
 function activate() {
       $scope.filter = '';
    

    };
 
  }]);