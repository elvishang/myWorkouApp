var myApp = angular.module('myApp', ['ngMaterial','ngRoute', 'ui.bootstrap']);

myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
      .when('/exercise', {
        templateUrl: '/views/templates/exercise.html'
      })
      .when('/login', {
        templateUrl: '/views/templates/login.html',
        controller: 'LoginController as lc',
      })
      .when('/register', {
        templateUrl: '/views/templates/register.html',
        controller: 'LoginController as lc'
      })
      .when('/workout', {
        templateUrl: '/views/templates/workout.html',
        controller: 'WorkoutController as wc'
      })
      .otherwise({
          redirectTo: 'exercise'
      });
  });