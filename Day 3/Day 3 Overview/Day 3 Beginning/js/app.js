var app = angular.module('CandyApp', []);

app.controller('CandyController', function($scope, CandyService){
    $scope.candy = {};
    $scope.dataArr = CandyService.getCandy();
    
    $scope.addCandy = function(){
        CandyService.addCandy($scope.candy);
        $scope.candy = {};         //Stops it from adding on.
    }
    
    $scope.removeCandy = function(pIndex){
       CandyService.removeCandy(pIndex); 
    }
    
});

app.service('CandyService', function(){
    dataArr = [];
    
    this.getCandy = function(){
        var str = localStorage.getItem("candyLS");
        dataArr = JSON.parse(str) || dataArr;
        return dataArr;
    };
    
    this.addCandy = function(pData){
        dataArr.push(pData);
        //Starting Storage
        var str = JSON.stringify(dataArr);
        localStorage.setItem("candyLS", str);
    };
    
    this.removeCandy = function(pIndex){
        dataArr.splice(pIndex, 1);
        var str = JSON.stringify(dataArr);
        localStorage.setItem("candyLS", str)
    };

});