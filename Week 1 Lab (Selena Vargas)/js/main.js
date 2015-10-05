/**
 * Created by Selena Vargas on 9/28/15.
 */
var myApp = angular.module("GroceryApp", []);

myApp.controller("GroceryController", function($scope, gService) {

    $scope.food = {};
    $scope.gArray = gService.getFood();

    $scope.formSubmit = function () {
        var itExists = 0;
        for (var j = 0; j < $scope.gArray.length; j++) {
            if ($scope.food.inputName === $scope.gArray[j].inputName){
                itExists++;
            }
        }
        if(itExists){
           alert("Item Duplicated. Please enter another.");
        }else{
            gService.addFood($scope.food);
            $scope.food = {};
        }

    };

    $scope.deleteItem = function (pIndex) {
        gService.removeFoodAt(pIndex);

    };

});

myApp.service("gService", function(){
    var gArray = [];

    this.getFood = function(){
        return gArray;

    }

    this.addFood = function(pFood){
        gArray.push(pFood);

    };

    this.removeFoodAt = function(pIndex){
        gArray.splice(pIndex, 1);

    }
});




