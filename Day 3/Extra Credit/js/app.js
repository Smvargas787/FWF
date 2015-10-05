/**
 * Created by RicanChica on 10/5/15.
 */
//vance Wamley and Selena Vargas

var app = angular.module('pizzaApp', []);

app.controller('pCon', function($scope, pService) {
    $scope.pizza = {};
    $scope.pData = pService.getPizza();

    $scope.addPizza = function(){
        pService.addPizza($scope.pizza);
        $scope.pizza = {};
    };

    $scope.removePizza = function(pIndex){
        pService.removePizza(pIndex);
    };

});


app.service("pService",function(){
    pData = [];
    this.getPizza = function(){
        return pData;
    };

    this.addPizza = function(pIndex){
        pData.addPizza.push(pIndex)
        //localStorage.setItem(pizza.name)
    };

    this.removePizza = function(pIndex){
        pData.removePizza.splice(pIndex,1)
    };


});