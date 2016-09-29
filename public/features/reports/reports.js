'use strict'

angular
  .module('app.reports', ['ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('reports', {
        url: '/reports',
        templateUrl: 'features/reports/reports.html',
        controller: 'ReportsController',
        controllerAs: 'vm'
      })
  })
  .controller('ReportsController', ['$http', '$log', '$uibModal', 'ReportInfoService', function ($http, $log, $uibModal, ReportInfoService) {
    var $ctrl = this;

    $ctrl.dares = {}

    // Get the reports when the page loads


    $ctrl.getReports = () => {
      ReportInfoService.getReports()
        .then(function (reports) {
          $ctrl.reports = reports
        })
    }

    $ctrl.getReports()

    $ctrl.getDares = () => {
      ReportInfoService.getDares().then(function (dares) {
        $ctrl.dares = dares
      })
    }

    $ctrl.getDares()

    //Get the dares TODO Put in different service


    $ctrl.testReport = {
      flagType: 1,
      reportFor: 1,
      userID: '57eb9f2641b0de35e0f08ce5',
      reportTargetID: '57eb9f2641b0de35e0f08ce5'

    }

    $ctrl.getType = ReportInfoService.getReportType
    $ctrl.reportFor = ReportInfoService.getReportFor

    $ctrl.removeReport = (reportID) => {
      ReportInfoService.removeReport(reportID)
        // Reload the reports again
      $ctrl.getReports()
    }



    $ctrl.generateTestReport = (size) => {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ReportsController',
        controllerAs: 'vm',
        size: size
          // resolve: {
          //   items: function () {
          //     return $ctrl.items
          //   }
          // }
      })

      modalInstance.result.then((selectedItem) => {
        $ctrl.selected = selectedItem
      }, () => {

        //Get the reports after the modal is closed
        $ctrl.getReports()
        $log.info('Modal dismissed at: ' + new Date())
      })
    }

    $ctrl.viewReport = function (report_id, report_object_type) {
      alert("Navigation to Object in server view")
    }

    $ctrl.generateReport = () => {
      $log.info($ctrl.reports)

      $ctrl.reports = {}
      $log.info($ctrl.reports)
      $http({
          url: 'http://localhost:3000/reports/add',
          method: 'POST',
          params: {
            flagType: +$ctrl.testReport.flagType,
            reportFor: $ctrl.testReport.reportFor,
            userID: $ctrl.testReport.userID,
            reportTargetID: $ctrl.testReport.reportFor
          }
        })
        .then(function successCallback(response) {
          $log.info(response)

          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          $log.info(response)

          // called asynchronously if an error occurs
          // or server returns response with an error status.
        })
    }


    // Set the get reports function


    // less.registerStylesheets();
    // less.refresh(true);

  }])
