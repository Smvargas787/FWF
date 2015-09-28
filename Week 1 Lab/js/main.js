/**
 * Created by RicanChica on 9/28/15.
 */

var myApp = angular.module("GroceryApp", []);

myApp.controller("GroceryController", function($scope){

    $scope.gArray = [];

    $scope.formSubmit = function (){

        $scope.gArray.push($scope.inputName);
        $scope.inputName = '';
        console.log($scope.gArray);
    }

});


