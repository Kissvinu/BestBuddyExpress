'use strict';

/**
 * @ngdoc overview
 * @name bestbuddyApp
 * @description
 * # bestbuddyApp
 *
 * Main module of the application.
 */
var app=angular
    .module('bestbuddyApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.sortable',
        'door3.css'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about/:id', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                 css: '../styles/buddyselfi.css'
            })
            .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'LoginCtrl'
            })
            .when('/registartion', {
              templateUrl: 'views/registartion.html',
              controller: 'RegistartionCtrl',
              controllerAs: 'registartion'
            })
            .when('/album', {
              templateUrl: 'views/album.html',
              controller: 'AlbumCtrl',
              controllerAs: 'album'
            })
            .when('/performance', {
              templateUrl: 'views/performance.html',
              controller: 'PerformanceCtrl',
              controllerAs: 'performance'
            })
            .when('/timeline', {
              templateUrl: 'views/timeline.html',
              controller: 'TimelineCtrl',
              controllerAs: 'timeline'
            })
            .when('/tilesAlbum', {
              templateUrl: 'views/tilesalbum.html',
              controller: 'TilesalbumCtrl',
              controllerAs: 'tilesAlbum'
            })
            .when('/feedback', {
              templateUrl: 'views/feedback.html',
              controller: 'FeedbackCtrl',
              controllerAs: 'feedback'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).factory('_', function() {
        return window._;
    });
