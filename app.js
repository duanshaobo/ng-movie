(function(angular){
    //切记将子模块作为依赖注入项目主模块app中
    var app=angular.module('app',['ngRoute','home','top250','coming_soon','in_theaters','detail','search','_404']);
    app.controller('indexCtrl',['$scope','$location','$window',function($scope,$location,$window){
        $scope.search=function(event){

            if((event.type=='keyup'&&event.keyCode==13)||event.type=='click'){
                var keywords=angular.element(document.getElementById('keywords')).val();
                if(keywords!=''){
                    $location.path('/search/'+keywords);
                }else{
                    // $window.alert('请输入电影名称');
                    // layer.alert('请输入电影名称',{title:'传智影业提示您'});
                    layer.msg('请输入电影名称');
                }
            }
            
            
        }
    }]);
    //配置路由
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/',{
            redirectTo:'/home'
        }).when('/home',{
            controller:'homeCtrl',
            templateUrl:'home/tpl.html'
        }).when('/top250',{
            controller:'top250Ctrl',
            templateUrl:'top250/tpl.html'
        }).when('/in_theaters',{
            templateUrl:'in_theaters/tpl.html',
            controller:'in_theatersCtrl'
        }).when('/coming_soon',{
            templateUrl:'coming_soon/tpl.html',
            controller:'coming_soonCtrl'
        }).when('/detail/:id',{
            templateUrl:'detail/tpl.html',
            controller:'detailCtrl'
        }).when('/search/:keywords',{
            templateUrl:'search/tpl.html',
            controller:'searchCtrl'
        })
        .otherwise({
            templateUrl:'404/tpl.html',
            controller:'_404Ctrl'
        });
    }]);
})(angular);