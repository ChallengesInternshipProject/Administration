'use strict';

angular
  .module('app.reports', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('reports', {
        url: "/reports",
        templateUrl: "features/reports/reports.html",
        controller: 'ReportsController',
        controllerAs: 'vm'
      })
  })
  .controller('ReportsController', function () {
    var ctrl = this;
    // less.registerStylesheets();
    // less.refresh(true);
    ctrl.test = 'it works'


  })
