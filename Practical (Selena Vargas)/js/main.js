var app = angular.module('cupcakeStop', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider

            .when("/list",{
                controller: 'listControl',
                templateUrl: 'pages/list.html'
        })
            .when("/form",{
                controller: 'formControl',
                templateUrl: 'pages/form.html'
            })
            .when("/details/:cupcakeDetails",{
                controller: 'detailsControl',
                templateUrl: 'pages/details.html'
            })
                    .otherwise({
                redirectTo:'/list'
            });
    });


    app.controller('listControl', function($scope, cupcakeService ){
        $scope.cakeArray = cupcakeService.getCakes();

        $scope.removeCake = function(pIndex){
            cupcakeService.removeCake(pIndex)
        };
    });

    app.controller('formControl', function($scope, cupcakeService){
        $scope.seanCake = {};

            $scope.addCake = function(){
                cupcakeService.addCake($scope.seanCake);
                $scope.seanCake = {};
                document.location.hash = "#/list";
            };
    });

    app.controller('detailsControl', function($scope, cupcakeService, $routeParams){
        $scope.seanCake = cupcakeService.getCakesAt($routeParams.cupcakeDetails);
    });

    app.service('cupcakeService', function(){
        cakeArray = [];

        this.getCakes = function(){
            var str = localStorage.getItem('cakeLS');
            cakeArray = JSON.parse(str) || cakeArray;
            return cakeArray;
        };

        this.getCakesAt = function(cdx){
            return this.getCakes()[cdx]
        };

        this.addCake = function(cakeLS){
            cakeArray.push(cakeLS);
            var str = JSON.stringify(cakeArray);
            localStorage.setItem('cakeLS', str);
        };

        this.removeCake = function(pIndex){
            cakeArray.splice(pIndex,1);
            var str = JSON.stringify(cakeArray);
            localStorage.setItem('cakeLS', str);

        };
    });