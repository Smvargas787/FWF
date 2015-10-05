/**
 * Created by RicanChica on 9/28/15.
 */

var app = angular.module("MorningSucks", []);


app.controller("MyController",function($scope, BevService){
    //$scope.test="ASDF"; //must put test for it to show up on html.
    $scope.bev = {};
    $scope.bevArray = BevService.getBeverages();

    $scope.onFormSubmit = function(){ //Makes the form work.
        BevService.addBeverage($scope.bev);
        $scope.bev ={};
        //console.log($scope.bevArray);
    };

    $scope.deleteItem = function(pIndex){ //delete button
        BevService.removeBeverageAt(pIndex);
        //$scope.bevArray.splice(pIndex,1); //only want it to remove 1 item.

    }
});

//Creating a Data Service

app.service("BevService", function(){
    var dataArray = [];

    this.getBeverages = function(){
        return dataArray;

    }

    this.addBeverage = function(pBev){
        dataArray.push(pBev);

    }

    this.removeBeverageAt = function(pIndex){
        dataArray.splice(pIndex, 1);

    }
});


