var app = angular.module('employeeApp', []);

app.controller('eController', function($scope, empService){
    $scope.employee = {};
    $scope.backstageArr = empService.getEmp();

    $scope.addEmp = function(){
      empService.addEmp($scope.employee);
        $scope.employee = {};

        };

        $scope.GetTheHellOut = function(pIndex){
            empService.GetTheHellOut(pIndex);

        };

});


app.service('empService', function(){
    backstageArr = [];

    this.getEmp = function(){
        var str = localStorage.getItem('EMPS');
        backstageArr = JSON.parse(str) || backstageArr;
        return backstageArr;
    };

    this.addEmp = function(EMPS){
        backstageArr.push(EMPS);
        var str = JSON.stringify(backstageArr);
        localStorage.setItem('EMPS', str);

    };

    this.GetTheHellOut = function(pIndex){
        backstageArr.splice(pIndex, 1);
        var str = JSON.stringify(backstageArr);
        localStorage.setItem('EMPS', str);

    };

});