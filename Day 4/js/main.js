var app = angular.module("RouteDemoApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/main",{
            controller:"MainController",
            templateUrl:"partials/main.html"
        }) .when("/page1", {
            controller: "Page1Controller",
            templateUrl: "partials/page1.html"
        }) .when("/page2", {
            controller: "Page2Controller",
            templateUrl: "partials/page2.html"
        }) .otherwise({
            redirectTo:"/main"
    })

})

app.controller("MainController", function($scope){
    $scope.test = "Hello World";
    $scope.counter = 0;
    $scope.onFrickingClick = function(){
        $scope.counter++;
    }

});

app.controller("Page1Controller", function($scope){
    $scope.test = "Goodbye World";

});

app.controller("Page2Controller", function($scope){
    $scope.test = "World does not exist";

});