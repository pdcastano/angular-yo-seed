'use strict';

/**
 * @ngdoc function
 * @name yoTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTodoApp
 */
angular.module('yoTodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    
    var todoInStorage = localStorageService.get('todos');

    $scope.todos = todoInStorage || [];

    $scope.$watch('todos',function(){
    	localStorageService.set('todos',$scope.todos);
    },true);

    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function(index){
    	$scope.todos.splice(index,1);
    };

  });
