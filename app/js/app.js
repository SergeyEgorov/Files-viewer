'use strict';

/* App Module */

var filesViewer = angular.module('filesViewer', [
    'ngRoute',

    'filesViewerControllers'
]);

filesViewer.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
