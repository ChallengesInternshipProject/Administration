'use strict';

// Declare app level module which depends on views, and components
angular
  .module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.reports'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/reports")
  })
