'use strict';

var timesheetApp = angular.module("timesheetApp", []);

timesheetApp.controller('mainController', ['$scope',
   function($scope) {


      $scope.addUser = function (  ) {
        alert('useradded!');
      };

   }
]);