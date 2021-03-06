angular
		.module('galeb-webui', [ 'ngRoute', 'ui.bootstrap', 'angular-hal', 'auth', 'api', 'navigation' ])
		.config(

				function($routeProvider, $httpProvider, $locationProvider) {
					$routeProvider.when('/dashboard', {
						templateUrl : 'templates/dashboard.html',
						controller : 'navigation'
					}).when('/environment', {
						templateUrl : 'templates/environment.html',
						controller : 'ApiController'
					}).when('/targettype', {
						templateUrl : 'templates/targettype.html',
						controller : 'ApiController'
					}).when('/ruletype', {
						templateUrl : 'templates/ruletype.html',
						controller : 'ApiController'
					}).when('/balancetype', {
						templateUrl : 'templates/balancetype.html',
						controller : 'ApiController'
					}).when('/balancepolicy', {
						templateUrl : 'templates/balancepolicy.html',
						controller : 'ApiController'
					}).when('/virtualhost', {
						templateUrl : 'templates/virtualhost.html',
						controller : 'ApiController'
					}).when('/rule', {
						templateUrl : 'templates/rule.html',
						controller : 'ApiController'
					}).when('/backendpool', {
						templateUrl : 'templates/backendpool.html',
						controller : 'ApiController'
					}).when('/backend', {
						templateUrl : 'templates/backend.html',
						controller : 'ApiController'
					}).when('/project', {
						templateUrl : 'templates/project.html',
						controller : 'ApiController'
					}).when('/team', {
						templateUrl : 'templates/team.html',
						controller : 'ApiController'
					}).when('/account', {
						templateUrl : 'templates/account.html',
						controller : 'ApiController'
					}).when('/farm', {
						templateUrl : 'templates/farm.html',
						controller : 'ApiController'
					}).when('/provider', {
						templateUrl : 'templates/provider.html',
						controller : 'ApiController'
					}).when('/login', {
						templateUrl : 'login.html',
						controller : 'navigation'
					}).otherwise('/login');

					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

				}).run(function(auth) {

			// Initialize auth module with the home page and login/logout path
			// respectively
			auth.init('/dashboard', '/login', '/logout');

		});
