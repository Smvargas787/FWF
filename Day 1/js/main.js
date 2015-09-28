/**
 * Created by RicanChica on 9/28/15.
 */

//Fixes the code to where the brackets don't show up on webpage. --- angular.module("appName",[])
var myApp = angular.module("MyFirstApp", []); //angular.module("appName",[])
//var calls it out as a variable and makes the console show up


myApp.controller("MyFirstController",function($scope){ //.controller(‘ctrlName”, function($scope){})


    //var test = 'huzzah';
    $scope.test = 'huzzah';

    $scope.uponClicking = function(){
        $scope.test +="!"; //with ng-click it adds the exclamation marks to huzzah when you click it.
    }
    console.log("I haz a Controller");

    //Other Stuff
    $scope.anArray = [];

    $scope.formSubmit = function (){
        $scope.anArray.push($scope.inputName);
        $scope.inputName = ''; //Connects to the forms which is why inputName is involved.
        console.log($scope.anArray);

    }

});
