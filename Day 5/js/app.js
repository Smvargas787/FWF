var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
        $routeProvider

            .when("/list", {
                controller:"listController",
                templateUrl:"partials/list.html"
            })
            .when("/new", {
                controller:"FormController",
                templateUrl:"partials/form.html"
            })
            .when("/details/:movieIdx", {
                controller:"DetailsController",
                templateUrl: "partials/details.html"
            })
            .otherwise({
                redirectTo:"/list"
            })
});


//Takes the add movie out of the "mycontroller" section and inputs it here for the route.
app.controller("FormController", function($scope, MovieService){

    $scope.movie = {};

    $scope.addMovie = function() {
        MovieService.addMovie($scope.movie);
        $scope.movie = {};
        document.location.hash = "#/list";
    };

    });

//Takes the remove movie out of the "mycontroller" section and inputs it here for the route.
app.controller("listController", function($scope, MovieService){
    $scope.movieArray = MovieService.getMovies();

    $scope.removeMovie = function(pIndex){
        MovieService.removeMovie(pIndex);
    };

});

app.controller("DetailsController", function($scope, $routeParams, MovieService){
    $scope.movie = MovieService.getMovieAt($routeParams.movieIdx);

});

app.service('MovieService', function(){
    
    var movieArray = [];
    
    this.getMovies = function(){
        var str = localStorage.getItem("MovieLS");
        movieArray =  JSON.parse(str) || movieArray;
       return movieArray; 
    };

    this.getMovieAt = function(idx){
       return this.getMovies()[idx];
    };

    this.addMovie = function(item){
        movieArray.push(item);
        var str = JSON.stringify(movieArray);
        localStorage.setItem("MovieLS", str);
    };
    
    this.removeMovie = function(pIndex){
        movieArray.splice(pIndex, 1);
        var str = JSON.stringify(movieArray);
        localStorage.setItem("MovieLS", str);
       
    };
});