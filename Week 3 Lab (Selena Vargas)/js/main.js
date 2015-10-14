var app = angular.module('sportsApp', ["ngRoute"]);

app.config(function($routeProvider){
        $routeProvider

            .when("/form",{
                controller:"formControl",
                templateUrl: "pages/form.html"
            })
            .when("/list",{
                controller:"listControl",
                templateUrl: "pages/list.html"
            })
            .when("/history/:teamHistory",{
                controller:"historyControl",
                templateUrl: "pages/history.html"
            })
            .when("/edit/:teamHistory",{
                controller:"editControl",
                templateUrl: "pages/edit.html"
            })

            .otherwise({
                redirectTo: "/list"
            })

});


app.controller('formControl', function($scope, SportsService){
    $scope.sport = {};

    $scope.addTeam = function(){
        SportsService.addTeam($scope.sport);
        $scope.sport = {};
        document.location.hash = "#/list";
    };
});

app.controller('listControl', function($scope, SportsService){
    $scope.sportsArray = SportsService.getTeams();

    $scope.removeTeam = function(pIndex){
        SportsService.removeTeam(pIndex);
    };
});


app.controller('historyControl', function($scope, $routeParams, SportsService){
    $scope.sport = SportsService.getTeamsAt($routeParams.teamHistory);
});

app.controller('editControl', function($scope, $routeParams, SportsService){
    $scope.sport = SportsService.getTeamsAt($routeParams.teamHistory);

    $scope.edit = {};

    $scope.editTeam = function(){
        $scope.edit = SportsService.editTeam($routeParams.teamHistory, $scope.edit )
        document.location.hash = "#/list";
    };

});

app.service('SportsService', function(){
    sportsArray = [];

    this.getTeams = function(){
        var str = localStorage.getItem('sTeam');
        sportsArray = JSON.parse(str) || sportsArray;
        return sportsArray;
    };

    this.getTeamsAt = function(History){
        return this.getTeams()[History];
    };

    this.addTeam = function(sTeam){
        sportsArray.push(sTeam);
        var str = JSON.stringify(sportsArray);
        localStorage.setItem('sTeam', str);
    };

    this.removeTeam = function(pIndex){
        sportsArray.splice(pIndex, 1);
        var str = JSON.stringify(sportsArray);
        localStorage.setItem('sTeam', str);
    };

    this.editTeam = function(idx, obj){
        sportsArray[idx] = obj;
        var str = JSON.stringify(sportsArray);
        localStorage.setItem('sTeam', str);
    }

});