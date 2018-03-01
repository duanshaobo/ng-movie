(function(angular){

    angular.module('top250',[]).controller('top250Ctrl',['$rootScope','$scope','$http',function($rootScope,$scope,$http){
        $rootScope.pageTitle='top250';
        $scope.list=[];
        $scope.getMovieList=function(){
            $http.get('mock-data/data.json').then(function(res){
                console.log(res);
                if(res.status==200){
                    $scope.list=res.data.subjects;
                    $scope.count=res.data.count;
                }
                
            });
        }
        $scope.getMovieList();
    }]);
    
})(angular)