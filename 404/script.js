(function(angular){
    angular.module('_404',[]).controller('_404Ctrl',['$rootScope','$scope','$interval','$location',function($rootScope,$scope,$interval,$location){
        $rootScope.pageTitle='404';
        $scope._404Style={
            fontSize:'140px',
            fontWeight:700,
            margin:'6% auto',
            color:'rgba(8,131,175,1)'
        };
        $scope.waitStyle={
            fontSize:'16px',
            margin:'20px auto',
            color:'#666'
        }

        var secondDom=angular.element(document.getElementById('second'));
        var second=parseInt(secondDom.text());
        var timerId=$interval(function(){
           if(second>0){
                second--; 
                secondDom.text(second);
           }else if(angular.isDefined(timerId)){
                $interval.cancel(timerId);
                $location.path('/home')
           }

        },1000)
        console.log(second);

    }]);    
})(angular)