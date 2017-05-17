var sc= angular.module('to',[]);

sc.controller('do',function($scope) {
            $scope.tasks=[];
            $scope.search=function(){
        
        if(event.which==13 && $scope.task !=""){
            
            $scope.addtask();
         }
         };
            $scope.addtask=function(){
            $scope.tasks.push({'taskmessage':$scope.task, 'status':false});
            console.log($scope.tasks);
            $scope.task='';
         };
            $scope.Edit=function(){
            console.log("Something");
            event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
               
        };
        $scope.editAgain=function(msg){
        if(event.which==13 && msg !=""){
         $scope.Edit();
        }
     }
});