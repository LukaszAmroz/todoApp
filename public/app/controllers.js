angular.module("TodoApp")
	.controller("todosCtrl", ["$scope", "$http", "globalValue", 
		function($scope, $http, globalValue){

		$scope.globalValue = globalValue;

		var refresh = function(){
			$http.get("/todos")
				.success(function(response, status){
					$scope.todos = response;
					console.log(response);
					console.log("GET Request status: " + status);
				})
				.error(function(reason, status){
					console.log("GET Request error status: " + status);
				});
		}

		refresh();

		$scope.add = function(){
			$http.post("/todos", $scope.todo)
				.success(function(response, status){
					console.log("POST Request status: " + status);
					$scope.todo = "";
					refresh();
				})
				.error(function(reason, status){
					console.log("POST Request error status: " + status);
				})
		};

		$scope.remove = function(id){
			$http.delete("/todos/" + id)
				.success(function(response, status){
					console.log("DELETE Request status: " + status);
					refresh();
				})
				.error(function(reason, status){
					console.log("DELETE Request error status: " + status);
				});
		};

		$scope.clear = function(){
			$scope.todo = "";
		};

		$scope.totalTodos = function(){
			return $scope.todos.length;
		}

	}]);
