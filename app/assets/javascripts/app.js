var app = angular.module('Nilavu', [ 'ngResource' ]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$routeProvider.when("/dashboards", {
		template : JST["angular/templates/dashboards/index"],
		controller : "DashboardIndexCtrl"
	}).when("/dashboards/:id", {
		template : JST["angular/templates/dashboards/show"],
		controller : "DashboardShowCtrl"
	}).when("/dashboards/:id/:book", {
		template : JST["angular/templates/dashboards/show"],
		controller : "DashboardShowCtrl"
	});		
});

app.config(function($httpProvider) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $(
			'meta[name=csrf-token]').attr('content');
});

// use angular/mustache style {{variable}} interpolation
_.templateSettings = {
	interpolate : /\{\{(.+?)\}\}/g
};

function cloudbooksctrl($scope, $location) {
	console.log("cloudbookctrl: $location---->" + $location.path());
	$apply(function() {
		$location.path("/cloud_books/index").replace();
	});
}

function BookCtrl($scope, $routeParams) {
    $scope.templateUrl = JST["angular/templates/widget/book_show"];
}

