angular.module('routeApp')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/pikachu', {
    templateUrl: 'views/pikachu.html'
  }).when('/charmander', {
    templateUrl: 'views/charmander.html'
  }).when('/jigglypuff', {
    templateUrl: 'views/jigglypuff.html'
  });
  $locationProvider.html5Mode(true);
});
