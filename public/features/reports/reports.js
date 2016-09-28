'use strict';

angular
  .module('app.reports', ['ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('reports', {
        url: "/reports",
        templateUrl: "features/reports/reports.html",
        controller: 'ReportsController',
        controllerAs: 'vm'
      })
  })
  .controller('ReportsController', ['$http', '$log', function ($http, $log) {
    var $ctrl = this;

    // Get the reports when the page loads
    getReports()


    // Set the get reports function
    function getReports() {
      $http.get('http://localhost:3000/reports')
        .then((response) => {
          $log.info('Reports loaded')
          $ctrl.reports = response.data
        })
    }

    // less.registerStylesheets();
    // less.refresh(true);
    $ctrl.getReports = () => {
      return getReports()
    }
  }])
