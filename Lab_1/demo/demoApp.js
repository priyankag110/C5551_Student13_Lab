angular.module('facebookUtilsDemo', ['facebookUtils', 'ngRoute'])
  .constant('facebookConfigSettings', {
    'routingEnabled' : true,
    'channelFile'    : 'channel.html',
    'appID'          : '863438334046621'
  })
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'demo/partials/main.html',
      controller  : angular.noop
    })
    .when('/private', {
      templateUrl : 'demo/partials/private.html',
      controller  : angular.noop,
      needAuth    : true
    })
    .otherwise({
      redirectTo  : '/'
    });
  })
  .controller('RootCtrl', function($rootScope, $scope, facebookUser) {
    $rootScope.loggedInUser = {};

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;

        });
      });
    });

      $scope.validate = function(email,password) {

          alert('Enter Valid Email id' + email);
          alert('Enter Valid Password');


      }


      $scope.register = function(firstName,lastName,emailId) {

          alert('Enter Valid Email id' + email);
          alert('Enter Valid Password');


      }


    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });
  });
