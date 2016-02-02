angular.module("TodoApp", ["ngRoute"])
	.config(function($routeProvider){

		$routeProvider
			.when("/", {
				templateUrl: "app/views/todos.html",
				controller: "todosCtrl"
			})
			.otherwise({ redirectTo: "/" });
	});
