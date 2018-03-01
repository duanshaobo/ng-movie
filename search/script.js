(function(angular){
    angular.module('search',['movie.service']).controller('searchCtrl',['$rootScope','$scope','$routeParams','$http','$window','$location','common',function($rootScope,$scope,$routeParams,$http,$window,$location,common){
        var keywords=$routeParams.keywords;
        $rootScope.pageTitle=$rootScope.keywords=keywords;
        $scope.search=function(keywords){  
            // console.log(keywords);
            $http.get('mock-data/data.json').then(function(res){
                var ret=common.getDataByTitle(res.data.subjects,keywords);
                if(ret==undefined){
                    // $window.alert('暂无搜索结果');
                    layer.msg('暂无搜索结果');
                    $location.path('/home');
                }else{
                    $scope.data=ret;
                }

                // console.log(ret);
               
            });
        }
        $scope.search(keywords);
        
    }]);
})(angular)