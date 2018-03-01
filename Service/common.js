(function(angular){
    angular.module('movie.service',[]).service('common',[function(){
        // 根据id值从数组中获取对应的数据 
        this.getDataById=function(arr,id){
            var ret;
            arr.forEach((item,index) => {
                if(item.id==id){
                   ret=item;
                }    
            });
            return ret;
        }
        this.getDataByTitle=function(arr,title){
            var ret;
            arr.forEach((item,index) => {
                if(item.title==title){
                   ret=item;
                }    
            });
            return ret;
        }
    }]);
})(angular)