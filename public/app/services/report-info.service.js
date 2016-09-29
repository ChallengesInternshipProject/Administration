angular.module('app')
  .factory('ReportInfoService', ['$http', '$log', '$q', function ($http, $log, $q) {

    var reportInfoService = {
      getReports: () => {
        var defer = $q.defer()
        $http.get('http://localhost:3000/reports')
          .then((response) => {
            defer.resolve(response.data)
          })

        return defer.promise
      },
      removeReport: (reportID) => {
        $http
          .delete('http://localhost:3000/reports/remove', {
            params: {
              reportID: reportID
            }
          })
          .success(function (response) {
            $log.info('Report removed')
          })
          .error(function (error) {
            $log.info(error)
          })
      },
      getDares: () => {
        var defer = $q.defer()

        $http.get('http://dareornot.herokuapp.com/dares')
          .success(function (dares) {
            defer.resolve(dares)
          })
        return defer.promise
      },
      getCommentData: () => {
        return null
      },
      getUserData: () => {
        return null
      },
      getReportType: (type) => {
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
      },
      getReportFor: (type) => {
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

    }

    return reportInfoService
  }])
