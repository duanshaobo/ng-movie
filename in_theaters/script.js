(function(angular){
    angular.module('in_theaters',[]).controller('in_theatersCtrl',['$rootScope','$scope',function($rootScope,$scope){
        $rootScope.pageTitle='正在热映'
    }]);
})(angular)