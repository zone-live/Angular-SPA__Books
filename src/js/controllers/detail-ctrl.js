/**
 * Detail Controller
 */

angular.module('Books')
    .controller('DetailCtrl', ['$scope', '$http', '$stateParams', DetailCtrl]);

function DetailCtrl($scope, $http, $stateParams) {

    $scope.bookId = $stateParams.bookId;

    /**
     * TableView
     */
    var baseApiEndpoint = '../js/book.json';

    $scope.bookDetails = [];
    $scope.bookSelected = [];
    $http.get(baseApiEndpoint + '?id='+$scope.bookId)
    .then(function(result) {
        $scope.bookDetails = result.data;
        for (var i = 0; i < $scope.bookDetails.length; i++) {

            if ($scope.bookDetails[i]['id'] == $scope.bookId ) {
                $scope.bookSelected.push($scope.bookDetails[i]);
                break;
            }
            
        }
    });

}