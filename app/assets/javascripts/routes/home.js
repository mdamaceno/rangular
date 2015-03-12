app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
