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
  .controller('ReportsController', ['$http', '$log', '$uibModal', function ($http, $log, $uibModal) {
    var $ctrl = this;

    $ctrl.testReport = {
      flagType: 1,
      reportFor: 1,
      userID: '57eb9f2641b0de35e0f08ce5',
      reportTargetID: '57eb9f2641b0de35e0f08ce5'

    }

    $ctrl.getType = function (type) {
      switch (type) {
      case 1:
        return 'Negative'
        break
      case 2:
        return 'Toxic'
        break;
      case 3:
        return 'Abuse'
        break

      default:
        return 'Other'
        break
      }
    }

    $ctrl.reportFor = function (type) {
      switch (type) {
      case 1:
        return 'Dare'
        break
      case 2:
        return 'Message'
        break;
      case 3:
        return 'Post'
        break

      default:
        return 'Picture'
        break
      }
    }

    $ctrl.generateTestReport = (size) => {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ReportsController',
        controllerAs: 'vm',
        size: size,
        resolve: {
          items: function () {
            return $ctrl.items
          }
        }
      })

      modalInstance.result.then((selectedItem) => {
        $ctrl.selected = selectedItem
      }, () => {
        $log.info('Modal dismissed at: ' + new Date())
      })
    }

    $ctrl.generateReport = () => {
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
