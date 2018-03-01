(function(angular){
    angular.module('detail',['movie.service']).controller('detailCtrl',['$rootScope','$scope','$http','$routeParams','common',function($rootScope,$scope,$http,$routeParams,common){
        $rootScope.pageTitle='电影详情';
        // console.log($routeParams);
        if($routeParams.id!=''){
            $http.get('mock-data/data.json').then(function(res){
                $scope.data=common.getDataById(res.data.subjects,$routeParams.id);
                $rootScope.pageTitle=$scope.data.title;
                console.log($scope.data);
            });
        }
    }]);
})(angular)