'use strict';

/**
 * @ngdoc overview
 * @name learnHighChartsApp
 * @description
 * # learnHighChartsApp
 *
 * Main module of the application.
 */
angular
  .module('learnHighChartsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ]);

var app = angular.module('learnHighChartsApp');
app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('');
  
  
  $stateProvider
    .state('root', {
      url: '',
      views: {
        '@': {
          controller: 'MainCtrl',
          templateUrl: 'views/main.html'
        }
      }
    })
    .state('root.firstTry', {
      url: 'firstTry',
      views: {
        '@': {
          //component: 'firstTry'
          template: '<first-try></first-try>'
        }
      }
    });
});
