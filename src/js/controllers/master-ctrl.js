/**
 * Master Controller
 */

angular.module('Books')
    .controller('MasterCtrl', ['$scope', '$http', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $http, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    /**
     * TableView
     */
    var baseApiEndpoint = '../js/book.json';

    $scope.books = []
    $http.get(baseApiEndpoint)
    .then(function(result) {
        $scope.books = result.data;
    });
   
    // Sorting table
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }
    $scope.sort('bookName');

}



