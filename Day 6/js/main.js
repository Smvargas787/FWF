var app = angular.module('shoeApp', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when ('/list',{
       controller: 'listController',
       templateUrl: 'partials/list.html'
    })
       .when ('/form', {
       controller: 'formController',
       templateUrl: 'partials/form.html'
   })
       .when ('/details/:shoeDetails/', {
       controller: 'detailsController',
       templateUrl: 'partials/details.html'

   }).otherwise({
           redirectTo: '/list'
       })
});

app.controller('formController', function($scope, shoeService) {
    $scope.shoe = {};

    $scope.addShoe = function(){
        shoeService.addShoe($scope.shoe);
        $scope.shoeArray = {};
        document.location.hash="/list.html";
    }
});

app.controller('listController', function($scope, shoeService){
    $scope.shoeArray = shoeService.getShoes();

    $scope.removeShoe = function(pIndex){
        shoeService.removeShoe(pIndex);
    }
});

app.controller('detailsController', function($scope, shoeService, $routeParams){
    $scope.shoe = shoeService.getshoesAt($routeParams.shoeDetails)

});

app.service('shoeService', function(){
    shoeArray = [];

    this.getShoes = function(){
        var str = localStorage.getItem('sInput');
        shoeArray = JSON.parse(str) || shoeArray;
        return shoeArray;
    };

    this.getshoesAt = function(idx){
        return this.getShoes()[idx];
    };

    this.addShoe = function(sInput){
        shoeArray.push(sInput);
        str();
    };

    this.removeShoe = function(pIndex){
        shoeArray.splice(pIndex, 1);
        str()
    };

    function str(){
        var str = JSON.stringify(shoeArray);
        localStorage.setItem('sInput', str);
    }
});




