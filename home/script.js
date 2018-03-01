(function(angular){
    var app=angular.module('home',[]);
    app.controller('homeCtrl',['$rootScope','$scope',function($rootScope,$scope){
        $rootScope.pageTitle='首页';
    }]);
})(angular)