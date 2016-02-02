angular.module("TodoApp")
	.directive("addform", function(){
		return {
			restrict: "E",
			templateUrl: "app/directives/views/addform.html"
		};
	});
	