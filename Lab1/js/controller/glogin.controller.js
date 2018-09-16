(function () {
    'use strict';

    angular
        .module('app')
        .controller('GloginController', ['$location', '$scope', function ($location,$scope) {

            $scope.onSignIn = function (response) {
                console.log(response);
            }
        }])
        .directive('googleSignInButton', function () {
            return {
                scope: {
                    buttonId: '@',
                    options: '&'
                },
                template: '<div></div>',
                link: function (scope, element, attrs) {
                    alert('hi');
                    var div = element.find('div')[0];
                    div.id = attrs.buttonId;
                    gapi.signin2.render(div.id, scope.options()); //render a google button, first argument is an id, second options
                }
            };
        })
})();